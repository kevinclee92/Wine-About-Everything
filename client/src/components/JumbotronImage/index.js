import React from "react";
import img from "../../images/homepageImage.jpeg"
import styles from "./jumbotronimage.css"
import LoginForm from "../LoginForm"

const JumbotronImage = (props) => (
  <div className="wrap">
      <img className="image" src={img} alt="HomePage Image"/>
      <div className="titleDescription">
        <h1>WINE ABOUT EVERYTHING!</h1>
        <div className="login">
          <LoginForm props={this.props}/>
        </div>
        <h3>Contributors</h3>
        <p>
        Kevin Lee, Clint Buchhauser, Justin Campbell, Armando Silva, Charles Towle
        </p>
      </div>
  </div>
);

export default JumbotronImage;