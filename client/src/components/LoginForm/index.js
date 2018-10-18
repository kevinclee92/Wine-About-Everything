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
        var user = this.state.user;
        const { name, value } = event.target;
        user[name] = value;
        this.setState({
            user
        })
    }

   
    handleFormSubmit = event => {
        event.preventDefault()
        console.log(this.state.user);
    }

    render () {
        return (
           
                    <form>
                        <br />
                        <br />
                        <TextField id="username"
                        label="Username"
                        margin="normal"
                        name="username"
                        style={{marginRight: "15px"}}
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                        
                        <TextField id="password"
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        />
                        <br /><br />
                        <Button type="submit" onClick={this.handleFormSubmit} variant="contained" color="primary" style={{marginRight: "10px"}}>
                            Login
                        </Button>
                        <Button variant="contained" color="primary" href="/signup">
                            Create Account
                        </Button>
                    </form>
            
            
        );
    }
}