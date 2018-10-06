import axios from "axios";

export default {
  // Gets all books
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the book with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the book with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a book to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }
};
