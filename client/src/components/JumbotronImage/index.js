import React from "react";
import img from "../../images/homepageImage.jpeg"
import styles from "./jumbotronimage.css"

const JumbotronImage = () => (
  <div className="wrap">
      <img className="image" src={img} alt="HomePage Image"/>
      <div className="titleDescription">
        <h1>WINE AND FRIENDS</h1>
        <p>Nullam a arcu pretium, venenatis nunc id, tempus est. Donec eu magna eu nulla viverra auctor at vel nisi. In varius porta pellentesque. Nulla facilisi. Praesent viverra, augue sed semper luctus, enim massa blandit risus, vel porta odio nisi id felis. Pellentesque placerat laoreet eros, id aliquet dolor iaculis id. Curabitur elit nulla, mollis et sagittis gravida, tincidunt id justo. Cras eget metus iaculis, elementum sapien at, bibendum elit. Nunc sem neque, rhoncus vel mi in, suscipit tempor lorem. Integer non finibus augue, laoreet malesuada eros. Etiam eu rutrum magna.</p>
      </div>
  </div>
);

export default JumbotronImage;