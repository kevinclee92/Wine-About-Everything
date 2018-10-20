import React, { Component } from 'react';
import Header from '../../components/Header';
import Avatar from '@material-ui/core/Avatar';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import styles from './userpage.css';
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer"

class UserPage extends Component {
    state = {
        user: {},
        notes: [],
        places: []

    }

    componentDidMount() {
       console.log(this.props.user._id);
      API.getUser(this.props.user._id)
      .then(res => {
        console.log("get by id", res);
        this.setState({
          user: res.data,
          notes: res.data.notes,
          places: res.data.places
        })
        
        
        //console.log(this.state)
      })
      
    }
        


      loadNotes = () => {
        API.getNotes()
          .then(res =>
            this.setState({ notes: res.data, title: "", discription: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };

      loadPlaces = () => {
          API.getPlaces()
            .then(res => 
                this.setState({ place: res.data, title: "", discription: "", image: "" })
            )
            .catch(err => console.log(err));
      }

      deletePlace = id => {
        API.deletePlace(id)
          .then(res => this.loadPlaces())
          .catch(err => console.log(err));
      };
    
      deleteNote = id => {
        API.deleteNote(id)
          .then(res => this.loadNotes())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.discription) {
          API.saveNote({
            title: this.state.title,
            discription: this.state.discription,
            synopsis: this.state.synopsis,
            date: this.state.date
          })
            .then(res => this.loadNotes())
            .catch(err => console.log(err));
        }
      };

            
    render() {
    return (
        <div>
        <Header />
        <Container fluid>
        <Row>
        <Col size="lg-12 md-6 sm-12">
            <h3>Welcome {this.state.user.name}</h3>
            <div className="avatar">
            <Avatar style={{height:60, width:60, marginBottom:20}} src={this.state.user.image}/>
            </div>
            <Jumbotron>
              <h3>Notes On My List</h3>
            
            {this.state.user.notes ? (
              <List>
                {this.state.user.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id}>
                      <strong>
                        {note.title} by {note.discription}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteNote(note._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}</Jumbotron>        
        </Col>
        <Col size="md-6 sm-12">
        <form>
              <Input
                style={{marginTop: 20}}
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.discription}
                onChange={this.handleInputChange}
                name="discription"
                placeholder="Discription (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.discription && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
        </Col>
        <Col size="md-6 sm-12">
        <div className="placesJumbo">
              <h3>Places I've Visited</h3>
            
            {this.state.user.places ? (
              <List>
                {this.state.user.places.map(place => (
                  <ListItem key={place._id}>
                    <Link to={"/places/" + place._id}>
                      <strong>
                        {place.title} by {place.discription}
                        <img className="placesImage" src={place.image} alt={place.discription} />
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePlace(place._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}</div>
        </Col>
        </Row>        
        </Container>
        <Footer />
        </div>
    )
    }
}

export default UserPage;