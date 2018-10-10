import React, { Component } from 'react';
import Header from '../../components/Header';
import Avatar from '@material-ui/core/Avatar';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import styles from './userpage.css';

class UserPage extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        API.getUser(this.props.match.params.userid) 
        .then(res => this.setState({user: res.data}))
      }

            
    render() {
    return (
        <div>
        <Header />
        <Container fluid>
            <h3>Welcome {this.state.user.name}</h3>
            <div className="avatar">
            <Avatar style={{height:60, width:60}} src={this.state.user.image}/>
            </div>
        </Container>
        </div>
    )
    }
}

export default UserPage;