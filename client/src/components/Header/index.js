import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from '../SimpleMenu';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="inherit" color="inherit" className={classes.grow}>
            Welcome to Wine About Everything!
          </Typography>
          <Link to={"/user"}>
          <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/wine101"}>
          <Button color="inherit">Wine 101</Button>
          </Link>
          <Link to={"/search"}>
          <Button color="inherit">Search Wines</Button>
          </Link>
          <Link to={"/logout"}>
          <Button color="inherit">Logout</Button>
          </Link>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <SimpleMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);