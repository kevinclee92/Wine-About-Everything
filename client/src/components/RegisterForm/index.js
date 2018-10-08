import React from 'react';
import TextField from '@material-ui/core/TextField';




export default class RegisterForm extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            age: ""
        }
    }



    render () {
        return (
            
            <form>
                <h3>Login Info</h3>
                <TextField
                    id="standard-with-placeholder"
                    label="Username"
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="Email"
                    placeholder="johndoe@example.com"
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Age"
                    type="number"
                    margin="normal"
                />
                 <TextField
                    id="standard-with-placeholder"
                    label="Phone Number"
                    type="number"
                    margin="normal"
                    placeholder="XXX-XXX-XXXX"
                />
                
                
                <h3>Address</h3>
                <TextField
                    id="standard-with-placeholder"
                    label="Street"
                    placeholder="Placeholder"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="City"
                    placeholder="Placeholder"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="State"
                    placeholder="Placeholder"
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Zipcode"
                    type="number"
                    margin="normal"
                />
                
            </form>
        );
    }
}