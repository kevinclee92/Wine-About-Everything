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
// import { Link } from "react-router-dom";
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
        console.log("USER NOTES: ", this.state.notes)
      })  
    }
        
      deleteFav = id => {
        let favs = this.state.favs;
        console.log("1st fav", favs);
        favs.splice(favs.indexOf(favs._id));
        console.log("2nd favs", favs);
        this.setState({favs: favs});
        API.updateUser(this.state.user._id, this.state.user)
        .then(function(data){
          console.log("updated user data:", data  );              
        })

      };
    
      deleteNote = id => {
        console.log("delete note", id);
          
        let notes = this.state.notes;
        var selectedNote;
        console.log("initial notes:", notes);

        for(let i = 0; i < notes.length; i++) {
          if (id === notes[i]._id) {
            selectedNote = notes[i];
            notes.splice(notes.indexOf(selectedNote), 1);
            console.log("updated notes", notes);
            this.setState({
              notes: notes
            });
            API.updateUser(this.state.user._id, this.state.user)
              .then(function(data){
                console.log("updated user data:", data);             
            });
            break;
              
          }
        }
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmitNote = event => {
        event.preventDefault();
        if (this.state.title && this.state.description && this.state.synopsis) {
          let note = {
            title: this.state.title,
            description: this.state.description,
            synopsis: this.state.synopsis,
            from: this.state.user.username
          }
          API.getUserByUsername(this.state.description)
            .then(function(data) {
              let endUser = data;
              console.log("message end-user data: ", endUser.data);
              endUser.data.notes.unshift(note);
              console.log("data._id", data.data._id)
              API.updateUser(data.data._id, endUser.data)
                .then(function(updatedData) {
                  console.log("Message Sent Updated", updatedData)
                })
              
            })
          
          // let notes = this.state.notes
          // notes.push(note)

          // this.setState({
          //   notes
          // })

          API.updateUser(this.state.user._id, this.state.user)
          .then(function(data){
            console.log("updated user data:", data);              
          })
          alert("message sent!")
        }
      };

      handleFormSubmitFavs = event => {
        event.preventDefault();
        if (this.state.name && this.state.winery) {
          let fav = {
            wine: this.state.wine,
            wine2: this.state.wine2,
            wine3: this.state.wine3,
            wine4: this.state.wine4,
            wine5: this.state.wine5,
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
        <div className="userBG" style={{marginBottom: 80}}>
        <Header {...this.props}/>
        <Container fluid>
        <Row>
          <div className="userWelcome">
            <h3 className="welcomeText">Welcome {this.state.user.name}</h3>
          </div>
            <div className="avatar">
            <Avatar style={{height:80, width:80, marginBottom:20}} src={this.state.user.image}/>
            </div>
        </Row>
        <Row>
        <Col size="lg-6 md-6 sm-12">
            
            <Jumbotron>
              <div className="img"></div>
              <Container>
              <h3>My Messages</h3>
            
            {this.state.user.notes ? (            
              <List>                
                {this.state.user.notes.map(note => (
                  <ListItem key={note._id}> 
                    <DeleteBtn onClick={() => this.deleteNote(note._id)} />
                    <div style={{color: "darkgrey"}}>
                      <h6 style={{textAlign: "left"}}>Title:&nbsp;&nbsp;&nbsp; <span style={{color: "black", fontSize: "20px"}}>{note.title}</span></h6>
                      <h6 style={{textAlign: "left"}}>From User:&nbsp;&nbsp;&nbsp; <span style={{fontSize: "20px", color: "black"}}>{note.from}</span></h6>
                    </div>
                    <hr />
                    <div>
                      <h6 style={{textAlign: "left", color: "darkgrey"}}>Message:&nbsp;&nbsp;&nbsp; <span style={{color: "black", fontSize: "15px"}}>{note.synopsis}</span></h6>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
        </Jumbotron>        
        </Col>
        <Col size="lg-6 md-6 sm-12">
        <Jumbotron>
        <div className="img"></div>
        <Container>
              <h3>Wine Favorites</h3>
            
            {this.state.favs ? (
              <List>
                {this.state.favs.map(fav => (
                  <ListItem key={fav._id}>
                    {/* <Link to={"/favs/" + fav._id}> */}
                      <strong>                        
                        {fav.wine} <hr /> {fav.wine2} <hr /> {fav.wine3} <hr /> {fav.wine4}  
                      </strong>
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.deleteFav(fav._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Container>
        </Jumbotron>
        </Col>
        </Row>
        <Row>
        <Col size="lg-12 md-12 sm-12">
        <h3 style={{marginBottom: "30px"}}>Direct Message</h3>
        <form>
              <Input
                style={{marginTop: 5, background: "rgb(148, 148, 194)", color: "black"}}
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                style={{background: "rgb(148, 148, 194)", color: "black"}}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Send Message To: (username)"
              />
              <TextArea
                style={{background: "rgb(148, 148, 194)", color: "black"}}
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Message"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmitNote}
              >
                Send Direct Message
              </FormBtn>
              {/* <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmitFavs}
              >
                Submit Favorite Wine
              </FormBtn> */}
            </form>
        </Col>
        </Row>
        </Container>        
        </div>
    )
    }
}

export default UserPage;