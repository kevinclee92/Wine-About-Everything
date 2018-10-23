import React from 'react';
import './homepageStyle.css'
import LoginForm from '../../components/LoginForm'

export default class HomePage extends React.Component {

    render () {
        return (
            <div className="background">
                <div className="hero">
                    <img src={require('../../images/logo_transparent.png')} alt="logoImage" className="logo"/>
                    <div className="title">

                    </div>
                </div>
                <div className="loginContainer">
                    <LoginForm updateUser={this.props.updateUser}/>
                </div>
            </div>
        )
        
    }
    
}
