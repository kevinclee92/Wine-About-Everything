import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class LoginForm extends React.Component {

    render () {
        return (
            <form>
                <br />
                <br />
                <TextField id="standard-password-input"
                label="Username"
                type="username"
                autoComplete="current-password"
                margin="normal"
                style={{marginRight: "15px"}}/>
                
                <TextField id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"/>
                <br /><br />
                <Button variant="contained" color="primary" style={{marginRight: "10px"}}>
                    Login
                </Button>
                <Button variant="contained" color="primary">
                    Create Account
                </Button>
            </form>
        );
    }
}