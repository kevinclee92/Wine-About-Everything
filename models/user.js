var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const NoteSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const PlaceSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  image: String,
  date: { type: Date, default: Date.now }
});

const FriendSchema = new Schema({
  // friend details
})

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String},
  phone: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zipcode: {type: String},
  email: {type: String},
  age: {type: Number},
  image: {type: String},
  notes: [NoteSchema],
  places: [PlaceSchema],
  friends: [FriendSchema],
  date: { type: Date, default: Date.now }
});


let User = mongoose.model("User", UserSchema);
const Note = mongoose.model("Note", NoteSchema);
const Place = mongoose.model("Place", PlaceSchema);
const Friend = mongoose.model("Friend", FriendSchema);

module.exports = User;