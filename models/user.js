var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var passportLocalMongoose = require('passport-local-mongoose');

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
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}],
  date: { type: Date, default: Date.now }
});


// UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", UserSchema);
const Note = mongoose.model("Note", NoteSchema);
const Place = mongoose.model("Place", PlaceSchema);
const Friend = mongoose.model("Friend", FriendSchema);

module.exports = User;
// module.exports = Place;
// module.exports = Note;
// module.exports = Friend;