import React, { Component } from 'react';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";

class UserPage extends Component {
    render() {
    return (
        <div>
        <Header />
        <Container fluid>
            <h1>UserPage</h1>
        </Container>
        </div>
    )
    }
}

export default UserPage;