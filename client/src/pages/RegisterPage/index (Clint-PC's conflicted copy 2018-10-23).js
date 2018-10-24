import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import "./registerpage.css"


export default class RegisterPage extends React.Component {    
    
    render () {
        return (
            <div>
                <div className="registerWrap">
                    <RegisterForm props={this.props}/>
                </div>
            </div>            
            
        );
    }
}

