import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import './SimpleMenu.css';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut= event => {
    event.preventDefault();

    console.log(this.props);
    API.logoutUser()
    .then((req) => {
      this.props.updateUser({
        loggedIn: false,
        username: null,
        user: {}
      })
      console.log("Logging out")
    })
    .then(this.props.history.push("/"));
    
    
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          variant="fab"
          onClick={this.handleClick}
        >
          <MenuIcon

          />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to={"/user"}>User</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to={"/search"}>Search</Link></MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to={"/wine101"}>Wine101</Link></MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link onClick={this.handleLogOut} to={"/"}>Logout</Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;