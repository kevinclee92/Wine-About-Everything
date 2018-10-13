import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import homepageImage from '../../images/homepageImage.jpeg'
import JumbotronImage from '../../components/JumbotronImage'
import styles from './homepageStyle.css'
import LoginForm from '../../components/LoginForm'

export default class HomePage extends React.Component {

    render () {
        return (
            <div>
                <Jumbotron>
                    <JumbotronImage props={this.props}/>     
                </Jumbotron>
            </div>
        )
        
    }
    
}

