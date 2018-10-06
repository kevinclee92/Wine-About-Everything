import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const styles = {
    paper: {
        minHeight: '100px',
        padding: '40px'
    }
}

class Login extends Component {
    
    render() {
      return (
        <Paper style={styles.paper}>
            <h2>Login</h2>
            <LoginForm/>
        </Paper>
      );
    }
  }
  
  export default Login;