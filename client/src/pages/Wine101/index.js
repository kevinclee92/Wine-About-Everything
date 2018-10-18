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
import imgEight from '../../images/holdwine.jpg';

export default class Wine101 extends React.Component {

    render () {
        return (
            <div>
                <Header />
                <Jumbotron>
                    <p></p>
                    <h2> Interesting facts about wine...</h2>
                    
                    
                    <h5>- Wine is made virtually in every country in the world -</h5>
                    <h5>- Intense fear or hatred of wine is called “oenophobia.” -</h5>
                    <h5>- The dark green wine bottle was an English invention, the work of Sir Kenelm Digby (1603-1665). Previously wine had been kept in goat skin bags. -</h5>
                    <h5>- The average age of a French oak tree harvested for use in creating wine barrels is 170 years. -</h5>
                    <h5>- European wines are named after their geographic locations while non-European wines are named after different grape varieties. -</h5>
                    <h5>- China has become the leading market for red wine—not just for its flavor. It’s a color favored by the government, and also is considered lucky. -</h5>
                    <h5>- The “Cheers” ritual started back in the Middle Ages, when poisoning was a favorite way to get rid of an enemy. To be sure their glass was poison-free, drinkers would first pour a bit of wine into each other’s glass, so if there was poison in one, it was now in both. -</h5>
                    <p></p>
                    
                    
                    <img src={imgEight}/>
                    <p></p>
                    <img src={img}/>
                    <img src={imgFour}/> <img src={imgFive}/> <img src={imgThree}/>  <img src={imgSix}/>
                </Jumbotron>    
                
            </div>
        )
        
    }
    
}