import React from "react";
import { Col } from "../../components/Grid";
import "./NoMatch.css";

const NoMatch = () => (
  <div className="bgDiv">
      <Col size="md-12">
          <h1 className="noMatchHead">Don't Wine over spilt wine!</h1>
          <h2 className="noMatchFoot">...oh who am i kidding, it's in the name, <br/> but seriously, check your route...</h2>
      </Col>
  </div>
);


export default NoMatch;
