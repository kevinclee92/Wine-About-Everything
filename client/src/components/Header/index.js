import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from '../SimpleMenu';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
// import API from '../../utils/API';

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
  width: '100%'
};

function ButtonAppBar(props) {
  const { classes } = props;

  // function handleLogOut(event) {
  //   event.preventDefault();
  //   console.log(props);
  //   API.logoutUser()
  //   .then((req) => {
  //     props.updateUser({
  //       loggedIn: false,
  //       username: null,
  //       user: {}
  //     })
  //   })
  //   .then(props.history.push("/"));  
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="inherit" color="inherit" className={classes.grow}>
            Welcome to Wine About Everything!
          </Typography>
          {/* <Link to={"/user"}>
          <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/wine101"}>
          <Button color="inherit">Wine 101</Button>
          </Link>
          <Link to={"/search"}>
          <Button color="inherit">Search Wines</Button>
          </Link>
          <Link to={"/logout"}>
          <Button onClick={handleLogOut} color="inherit">Logout</Button>
          </Link> */}
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <SimpleMenu {...props}/>
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