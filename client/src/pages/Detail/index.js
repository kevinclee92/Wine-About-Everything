import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    note: {}
  };
  // Add code to get the note with an _id equal to the id in the route param
  // e.g. http://localhost:3000/notes/:id
  // The note id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    API.getUser(this.props.match.params.id) 
    .then(res => console.log("!!!", res.data.notes._id))
    // .then(res => this.setState({notes: res.data.notes}))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.note.title} by {this.state.note.discription}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.note.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Notes</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
