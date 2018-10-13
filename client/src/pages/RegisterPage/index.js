import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RegisterForm from '../../components/RegisterForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./registerpage.css"





export default class RegisterPage extends React.Component {
    
    
    render () {
        return (
            <div>
                <div>
                </div>
                <div className="registerWrap">
                    <RegisterForm props={this.props}/>
                </div>
            </div>
            
            
        );
    }
}

