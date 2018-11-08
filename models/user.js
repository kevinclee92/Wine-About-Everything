var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const NoteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  synopsis: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now },
  from: {type: String}
});

const FavSchema = new Schema({
  wine: { type: String },
  wine2: { type: String },
  wine3: { type: String },
  wine4: { type: String },
  winery: { type: String },
  region: { type: String },
  synopsis: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now }
});

const FriendSchema = new Schema({
  // friend details
})

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  phone: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  email: { type: String },
  age: {type: Number},
  image: { type: String },
  notes: [ NoteSchema ],
  favs: [ FavSchema ],
  friends: [ FriendSchema ],
  date: { type: Date, default: Date.now }
});


let User = mongoose.model("User", UserSchema);
const Note = mongoose.model("Note", NoteSchema);
const Fav = mongoose.model("Fav", FavSchema);
const Friend = mongoose.model("Friend", FriendSchema);

module.exports = User;