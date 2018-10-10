import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
class RegisterForm extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            name: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            email: "",
            age: ""
        },
        redirect: false
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            console.log("working")
            this.props.history.push('/')
        }
    }

    handleInputChange = event => {
        var user = this.state.user;
        const { name, value } = event.target;
        user[name] = value;
        this.setState({
            user,
            redirect: false
        })
    };

    componentDidMount() {
        console.log(this.props);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        var currentState = this.state;
        currentState.redirect = true;
        this.setState({currentState})
        
        API.saveUser({
            username: this.state.user.username,
            password: this.state.user.password,
            name: this.state.user.name,
            phone: this.state.user.phone,
            street: this.state.user.street,
            city: this.state.user.city,
            state: this.state.user.state,
            zip: this.state.user.zip,
            email: this.state.user.email,
            age: this.state.user.age
        })
        .then(
            this.props.history.push("/")
        );
    }

    render () {
        return (
         
            <form>
                <h3>Login Info</h3>
                <TextField
                    id="username"
                    label="Username"
                    margin="normal"
                    name="username"
                    value={this.state.user.username}
                    onChange={this.handleInputChange}
                    required={true}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleInputChange}
                    required={true}
                />
                <TextField
                    id="email"
                    label="Email"
                    placeholder="johndoe@example.com"
                    margin="normal"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleInputChange}
                    required={true}
                />
                <TextField
                    id="name"
                    label="Name"
                    margin="normal"
                    name="name"
                    value={this.state.user.name}
                    onChange={this.handleInputChange}
                    required={true}
                />
                <TextField
                    id="age"
                    label="Age"
                    type="number"
                    margin="normal"
                    name="age"
                    value={this.state.user.age}
                    onChange={this.handleInputChange}
                    required={true}
                />
                 <TextField
                    id="phone"
                    label="Phone Number"
                    type="number"
                    margin="normal"
                    placeholder="XXX-XXX-XXXX"
                    name="phone"
                    value={this.state.user.phone}
                    onChange={this.handleInputChange}
                />
                
                
                <h3>Address</h3>
                <TextField
                    id="street"
                    label="Street"
                    margin="normal"
                    name="street"
                    value={this.state.user.street}
                    onChange={this.handleInputChange}
                />
                <TextField
                    id="city"
                    label="City"
                    margin="normal"
                    name="city"
                    value={this.state.user.city}
                    onChange={this.handleInputChange}
                />
                <TextField
                    id="state"
                    label="State"
                    margin="normal"
                    name="state"
                    value={this.state.user.state}
                    onChange={this.handleInputChange}
                />
                <TextField
                    id="zipcode"
                    label="Zipcode"
                    type="number"
                    margin="normal"
                    name="zipcode"
                    value={this.state.user.zipcode}
                    onChange={this.handleInputChange}
                />

                <Button onClick={this.handleFormSubmit} variant="contained" color="primary">
                    Create Account
                </Button>
                
                <Button variant="contained" color="primary" href="/">
                    Go Back
                </Button>
            </form>
        );
    }
}

export default withRouter(RegisterForm);