var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  email: {type: String},
  age: {type: Number},
  date: { type: Date, default: Date.now }
});

// UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", UserSchema);

module.exports = User;