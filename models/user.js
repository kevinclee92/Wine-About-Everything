var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// var passportLocalMongoose = require('passport-local-mongoose');

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
  age: {type: Number},
  image: {type: String},
  date: { type: Date, default: Date.now }
});

UserSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

UserSchema.methods.comparePassword = function (password,hash) {
  return bcrypt.compareSync(password,hash)
}

// UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", UserSchema);

module.exports = User;