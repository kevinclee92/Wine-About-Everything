import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import homepageImage from '../../images/homepageImage.jpeg'
import JumbotronImage from '../../components/JumbotronImage'
import './homepageStyle.css'
import LoginForm from '../../components/LoginForm'

export default class HomePage extends React.Component {

    render () {
        return (
            <div className="background">
                <div className="hero">
                    <img src={require('../../images/logo_transparent.png')} className="logo"/>
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
