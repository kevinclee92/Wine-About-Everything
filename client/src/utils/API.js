import axios from "axios";

export default {
  // Gets all notes
  getNotes: function() {
    return axios.get("/api/users/notes");
  },
  // Gets the note with the given id
  getNote: function(id) {
    return axios.get("/api/users/notes/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/users/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/users/notes", noteData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user by username
  getUserByUsername: function(username) {
    return axios.get("/api/users/" + username);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/id/" + id);
  },
  updateUser: function(id, userdata) {
    return axios.put("/api/users/id/" + id, userdata)
  },
  getStoredUser: function() {
    return axios.get("/api/users/stored");
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },

  // Gets all places
  getPlaces: function() {
    return axios.get("/api/places");
  },
  // Gets the place with the given id
  getPlace: function(id) {
    return axios.get("/api/places/" + id);
  },
  // Deletes the place with the given id
  deletePlace: function(id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves a place to the database
  savePlace: function(placeData) {
    return axios.post("/api/places", placeData);
  }
};
