import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect, withRouter} from 'react-router-dom';
import API from '../../utils/API';

class LoginForm extends React.Component {
 
    state = {
        user: {
            username: '',
            password: '',
            redirectTo: null
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
        API.loginUser(this.state.user)
        .then(response => {
            console.log('login response: ')
            console.log(response);
            //console.log(response)
            console.log(this.props);
            if (response.status === 200) {
                // update App.js state
                API.getUserByUsername(response.data.user.username)
                .then(res => {
                    // console.log("UPDATINGGGGG")
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.user.username,
                        user: response.data.user
                    })
                })
                .then( () => {
                    this.setState({
                        redirectTo: '/user'
                    })
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })

    }

    render () {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
}

export default withRouter(LoginForm);