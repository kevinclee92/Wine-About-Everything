import React, { Component } from 'react';
import Header from '../../components/Header';
import Avatar from '@material-ui/core/Avatar';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import './userpage.css';
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn,  } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer"
class UserPage extends Component {
    state = {
        user: {},
        notes: [],
        favs: []

    }

    componentDidMount() {
       console.log(this.props.user._id);
      API.getUser(this.props.user._id)
      .then(res => {
        console.log("get by id", res);
        this.setState({
          user: res.data,
          notes: res.data.notes,
          favs: res.data.favs
        })
      })  
    }
        
      deleteFav = id => {
        API.deleteFav(id)
          .then(res => this.state.user)
          .catch(err => console.log(err));
      };
    
      deleteNote = id => {
        API.deleteNote(id)
          .then(res => this.state.user)
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmitNote = event => {
        event.preventDefault();
        if (this.state.title && this.state.description) {
          let note = {
            title: this.state.title,
            description: this.state.description,
            synopsis: this.state.synopsis,
            date: this.state.date
          }
          
          let notes = this.state.notes
          notes.push(note)

          this.setState({
            notes
          })
          API.updateUser(this.state.user._id, this.state.user)
          .then(function(data){
            console.log("updated user data:", data);              
          })
        }
      };

      handleFormSubmitFavs = event => {
        event.preventDefault();
        if (this.state.title && this.state.description) {
          let fav = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            date: this.state.date
          }

          let favs = this.state.favs
          favs.push(fav);
          
          this.setState({favs})
            console.log("fav data", this.state.favs);
            
            API.updateUser(this.state.user._id, this.state.user)          
        }
      };

            
    render() {
    return (
        <div>
        <Header {...this.props}/>
        <Container fluid>
        <Row>
          <div className="userWelcome">
            <h3 className="welcomeText">Welcome {this.state.user.name}</h3>
          </div>
            <div className="avatar">
            <Avatar style={{height:60, width:60, marginBottom:20}} src={this.state.user.image}/>
            </div>
        </Row>
        <Row>
        <Col size="lg-6 md-6 sm-12">
            
            <Jumbotron>
              <h3>Notes On My List</h3>
            
            {this.state.user.notes ? (            

              <List>
                
                {this.state.user.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id}>
                      <strong>
                        {note.title} by {note.description}
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
        <Col size="lg-6 md-6 sm-12">
        <Jumbotron>
              <h3>My Favorite Places I've Visited</h3>
            
            {this.state.favs ? (
              <List>
                {this.state.favs.map(fav => (
                  <ListItem key={fav._id}>
                    <Link to={"/favs/" + fav._id}>
                      <strong>
                        {fav.title} by {fav.description}
                        <img className="favImage" src={fav.image} alt={fav.description} />
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFav(fav._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Jumbotron>
        </Col>
        </Row>
        <Row>
        <Col size="lg-12 md-12 sm-12">
        <form>
              <Input
                style={{marginTop: 5}}
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Note/Place Title (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Short Description (required)"
              />
              <Input
                placeholder="Picture Link (optional)"
                name="image"
                value={this.state.image}
                onChange={this.handleInputChange}
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Quick Notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmitNote}
              >
                Submit Note
              </FormBtn>
              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmitFavs}
              >
                Submit Favorite
              </FormBtn>
            </form>
        </Col>
        </Row>
        </Container>
        <Footer />
        </div>
    )
    }
}

export default UserPage;