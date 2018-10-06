import React from "react";
import img from "../../images/homepageImage.jpeg"
import styles from "./jumbotronimage.css"
import LoginForm from "../LoginForm"

const JumbotronImage = () => (
  <div className="wrap">
      <img className="image" src={img} alt="HomePage Image"/>
      <div className="titleDescription">
        <h1>WINE AND FRIENDS</h1>
        <div className="login">
          <LoginForm />
        </div>
        <p>
        Nam sit amet est convallis, dictum tortor a, porttitor mi. Sed mi urna, tincidunt sit amet placerat ut, molestie quis leo. Aliquam laoreet metus vitae iaculis imperdiet. Nulla facilisi. Sed eu tellus non metus facilisis aliquam. Etiam eget sapien convallis, viverra arcu id, placerat sem. Mauris tincidunt porttitor augue non blandit. Morbi vel mauris tincidunt, rhoncus eros a, facilisis nunc. Praesent bibendum, justo sed commodo facilisis, dui eros egestas lorem, cursus maximus neque lacus ut nunc.
        </p>
      </div>
  </div>
);

export default JumbotronImage;