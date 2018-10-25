import React from 'react';
import './homepageStyle.css'
import LoginForm from '../../components/LoginForm'
import { Col, Row, Container } from "../../components/Grid";

export default class HomePage extends React.Component {

    render () {
        return (
            <div className="background">
                <Container fluid className="homepageContainer">
                    <Col size=" sm-12" className="hero">
                        <img src={require('../../images/logo_transparent.png')} alt="logoImage" className="logo"/>
                    </Col>
                    {}
                    <Col size="sm-12" className="loginContainer">
                        <LoginForm updateUser={this.props.updateUser}/>
                    </Col>
                </Container>
                {/* <div className="hero">
                    <img src={require('../../images/logo_transparent.png')} alt="logoImage" className="logo"/>
                </div>
                <div className="loginContainer">
                    <LoginForm updateUser={this.props.updateUser}/>
                </div> */}
            </div>
        )
        
    }
    
}
