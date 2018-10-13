import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

export default class LoginForm extends React.Component {

    state = {
        user: {
            username: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            user: {
                [event.target.id]: event.target.value
            }
        });
    }

   
    handleFormSubmit = event => {
        event.preventDefault()

    }

    render () {
        return (
           
                    <form>
                        <br />
                        <br />
                        <TextField id="username"
                        label="Username"
                        type="username"
                        autoComplete="current-password"
                        margin="normal"
                        style={{marginRight: "15px"}}
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                        
                        <TextField id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        />
                        <br /><br />
                        <Button type="submit" onClick={() => this.handleFormSubmit} variant="contained" color="primary" style={{marginRight: "10px"}}>
                            Login
                        </Button>
                        <Button variant="contained" color="primary" href="/register">
                            Create Account
                        </Button>
                    </form>
            
            
        );
    }
}