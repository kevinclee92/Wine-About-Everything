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
    <AppBar className='jumbo valign-wrapper' position="static">    
        {/* <Toolbar className='container header-background'>        
          <Typography className='grey-text text-lighten-2 center header' variant="title" color="inherit" >
            Wine about Everything!
          </Typography>
          <ul style={{listStyleType: "none", margin: 0, padding: 0}}>
            <li><Button color="inherit">Notes</Button></li>
            <li><Button color="inherit">Logout</Button></li>
          </ul>
        </Toolbar> */}
      </AppBar>
  </header>
);

export default Header;