const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
