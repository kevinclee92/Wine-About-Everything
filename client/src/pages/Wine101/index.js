import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import img from '../../images/foodandwinepairing.jpg'
import imgTwo from '../../images/wineinfo.jpg'
import JumbotronImage from '../../components/JumbotronImage'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imgThree from '../../images/winestats.jpg';
import imgFour from '../../images/winestats2.jpg';
import imgFive from '../../images/winestats3.jpg';
import imgSix from '../../images/winestats4.jpg';
import imgSeven from '../../images/winecolor.jpg';

export default class Wine101 extends React.Component {

    render () {
        return (
            <div>
                <Header />
                <Jumbotron>
                    <h1> Wine 101 info page...</h1>
                    <img src={imgTwo}/>
                    <img src={img}/>
                     
                    <img src={imgFour}/> <img src={imgThree}/> <img src={imgFive}/> <img src={imgSix}/>
                </Jumbotron>    
                
            </div>
        )
        
    }
    
}