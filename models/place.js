const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  image: String,
  date: { type: Date, default: Date.now }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;