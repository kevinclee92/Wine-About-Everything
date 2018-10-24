var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const NoteSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const FavSchema = new Schema({
  wine: { type: String, required: true },
});

const FriendSchema = new Schema({
  // friend details
})

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true},
  phone: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zipcode: {type: String},
  email: {type: String},
  age: {
    type: Number, 
    required: true,
    validate: {
      validator: function(number) {
        return number >= 21;
      },
      message: "Must be 21 or over!"
    }
  },
  image: {type: String},
  notes: [NoteSchema],
  favs: [FavSchema],
  friends: [FriendSchema],
  date: { type: Date, default: Date.now }
});


let User = mongoose.model("User", UserSchema);
const Note = mongoose.model("Note", NoteSchema);
const Fav = mongoose.model("Fav", FavSchema);
const Friend = mongoose.model("Friend", FriendSchema);

module.exports = User;