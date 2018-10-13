const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const app = express();
const passport = require('passport');
const logger = require('morgan');
var configDB = require('./config/database.js');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes)


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || configDB.url);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
