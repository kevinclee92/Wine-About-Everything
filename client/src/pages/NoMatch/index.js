import React from "react";
import { Col } from "../../components/Grid";
import "./NoMatch.css";

const NoMatch = () => (
  <div className="bgDiv">
      <Col size="md-12">
          <h1 className="noMatchHead">Party Foul!</h1>
          <h2 className="noMatchFoot">Please handle your wine, <br/> and your routes responsibly...</h2>
      </Col>
  </div>
);


export default NoMatch;
