import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './headerStyle.css';

const Header = () => (
  <header>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            Final Project
          </Typography>
          <ul style={{listStyleType: "none", margin: 0, padding: 0}}>
            <li><Button color="inherit">Login</Button></li>
            <li><Button color="inherit">Create Account</Button></li>
          </ul>
        </Toolbar>
      </AppBar>
  </header>
);

export default Header;