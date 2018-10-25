import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect, withRouter} from 'react-router-dom';
import API from '../../utils/API';
import "./loginform.css";

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
            console.log(response.data);
            //console.log(response)
            console.log(this.props);
            if (response.status === 200) {
                // update App.js state
                API.getUserByUsername(response.data.user.username)
                .then(res => {
                    console.log(res)
                    this.props.updateUser({
                        loggedIn: true,
                        username: res.data.username,
                        user: res.data
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
            this.setState({error: "Login Error. Check your username and password."})
            
        })

    }

    render () {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
                <div>
                    {this.state.error && <h2 className="errormsg">{this.state.error}</h2>}
                    <form className="loginFormStyle">
                        <p className="loginTitle"><span className="loginW">LOG IN</span> or <span className="signupW">SIGN UP</span></p>
                        <hr />
                        <TextField id="username"
                        label="Username"
                        margin="normal"
                        name="username"
                        style={{marginRight: "15px", marginTop: "0px"}}
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                        
                        <TextField id="password"
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        style={{marginTop: "0px"}}
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        />
                        <br /><br />
                        <Button type="submit" onClick={this.handleFormSubmit} variant="contained" color="primary" style={{marginRight: "10px"}}>
                            Login
                        </Button>
                        <Button variant="contained" color="primary" href="/signup">
                            Sign Up
                        </Button>
                        <br />
                        <p className="twentyone">* Must be 21 or over. Please drink responsibly.</p>

                    </form>
                </div>
           
                    
            
            
        );
    }
    }
}

export default withRouter(LoginForm);