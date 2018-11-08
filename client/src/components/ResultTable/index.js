import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import redwineicon from '../../images/redwineicon.png';
import whitewineicon from '../../images/whitewineicon.png';
import pinkwineicon from '../../images/pinkwineicon.png';
import "./resultTable.css";
import API from '../../utils/API';
// import { Redirect, withRouter } from 'react-router-dom';

// ORDER RESULTS
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// SORT RESULTS
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

// RESULT ROWS
const rows = [
  { id: 'color', numeric: false, disablePadding: false, label: 'Color' },
  { id: 'wine', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'vintage', numeric: true, disablePadding: false, label: 'Vintage' },
  { id: 'appellation', numeric: false, disablePadding: false, label: 'Appellation' },
  { id: 'score', numeric: true, disablePadding: false, label: 'Score' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = ({ numSelected, classes, handleFavoriteClick }) => {

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography>
            {numSelected} selected
          </Typography>
        ) : (
            <h2>Results</h2>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>

        <Tooltip title="Favorite">
          <IconButton
            onClick={event => handleFavoriteClick(event)}
            aria-label="Favorite">
            <div className="star"> <StarIcon /> </div>
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {

  state = {
    order: 'asc',
    orderBy: 'wine',
    selected: [],
    data: {},
    page: 0,
    rowsPerPage: 5,
    user: {},
    favs: []
  };

  componentDidMount() {
    console.log('THIS.PROPS.USER-ID: ', this.props);
    API.getUser(this.props.user._id)
      .then(res => {
        console.log("get by id", res);
        this.setState({
          user: res.data,
        })
      })
  }

handleRequestSort = (event, property) => {
  const orderBy = property;
  let order = 'desc';

  if (this.state.orderBy === property && this.state.order === 'desc') {
    order = 'asc';
  }

  this.setState({ order, orderBy });
};

handleSelectAllClick = event => {
  if (event.target.checked) {
    this.setState(state => ({ selected: state.data.map(n => n.wine_id) }));
    return;
  }
  this.setState({ selected: [] });
};

wineColor = (color) => {
  switch (color) {
    case 'Red':
      color = <img src={redwineicon} title='Red' alt="Red Wine" style={{ width: 50, height: 50 }}></img>
      break;
    case 'White':
      color = <img src={whitewineicon} title='White' alt="White Wine" style={{ width: 50, height: 50 }}></img>
      break;
    case 'Pink':
      color = <img src={pinkwineicon} title='Pink' alt="Pink Wine" style={{ width: 50, height: 50 }}></img>
      break;
    default:
      color = ''
  }
  return color;
}

handleClick = (event, wine) => {
  const { selected } = this.state;
  const selectedIndex = selected.indexOf(wine);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, wine);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1),
    );
  }
  this.setState({ selected: newSelected });
  console.log(newSelected)
};

handleFavoriteClick = event => {
  event.preventDefault();
  let fav = {
    wine: this.state.selected[0],
    wine2: this.state.selected[1],
    wine3: this.state.selected[2]
  }

  let favs = this.state.favs
  favs.push(fav);

  this.setState({ favs })

  let user = this.state.user
  user.favs = this.state.favs

  this.setState({ user })

  console.log("fav data", this.state.favs, this.state.user);

  API.updateUser(this.state.user._id, this.state.user)
  alert("Wine added to your Favorites");
}

handleChangePage = (event, page) => {
  this.setState({ page });
};

handleChangeRowsPerPage = event => {
  this.setState({ rowsPerPage: event.target.value });
};

isSelected = id => this.state.selected.indexOf(id) !== -1;

render() {
  const { classes, data } = this.props;
  const { order, orderBy, selected, rowsPerPage, page } = this.state;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={selected.length} handleFavoriteClick={this.handleFavoriteClick} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isSelected = this.isSelected(n.wine);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.wine)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.wine_id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell>{this.wineColor(n.color)}</TableCell>
                    <TableCell>{n.wine}</TableCell>
                    <TableCell numeric>{n.vintage}</TableCell>
                    <TableCell>{n.appellation}, {n.country}</TableCell>
                    <TableCell numeric>{n.score}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    </Paper>
  );
}
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);