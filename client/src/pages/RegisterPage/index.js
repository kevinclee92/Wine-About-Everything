import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RegisterForm from '../../components/RegisterForm'

export default class RegisterPage extends React.Component {

    render () {
        return (
            <div>
                <RegisterForm/>
            </div>
        );
    }
}