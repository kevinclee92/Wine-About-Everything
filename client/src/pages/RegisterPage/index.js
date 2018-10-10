import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RegisterForm from '../../components/RegisterForm'
import styles from './registerpage.css'

export default class RegisterPage extends React.Component {
    componentDidMount = () => {
        console.log(this.props);
    }
    render () {
        return (
            <div className="wrap">
                <RegisterForm props={this.props}/>
            </div>
        );
    }
}