import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./NoMatch.css";

const NoMatch = () => (
  <Container fluid>
  <div className="backgroundDiv">
    <Row>
      <Col size="md-12">
          <h1>Don't Wine over spilt wine!</h1>
          <h2>...oh who am i kidding, it's in the name, but seriously, check your route...</h2>
      </Col>
    </Row>
  </div>
  </Container>
);


export default NoMatch;
