
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');
var bCrypt          = require('bcrypt-nodejs')
var flash = require("connect-flash");

// expose this function to our app using module.exports
module.exports = function(passport) {
    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
      }
    
    function generateHash(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
       }

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // passport/login.js
passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 
    // check in mongo if a user with username exists or not
    User.findOne({ 'username' :  username }, 
      function(err, user) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // Username does not exist, log error & redirect back
        if (!user){
          console.log('User Not Found with username '+username);
          return done(null, false, 
                req.flash('message', 'User Not found.'));                 
        }
        // User exists but wrong password, log the error 
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false, 
              req.flash('message', 'Invalid Password'));
        }
        // User and password both match, return user from 
        // done method which will be treated like success
        return done(null, user);
      }
    );
}));



    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('signup', new LocalStrategy({
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // we are checking to see if the user trying to login already exists
        User.findOne({ 'username' :  username }, function(err, user) {
            // if there are any errors, return the error
            if (err) {
                console.log("signup error", err);
                return done(err);
            }

            // check to see if theres already a user with that email
            if (user) {
                console.log("User already exists")
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser  = new User();

                // set the user's local credentials
                newUser.username = username;
                newUser.password = generateHash(password);
                newUser.name = req.param('name');
                newUser.phone = req.param('phone');
                newUser.street = req.param('street');
                newUser.city = req.param('city');
                newUser.state = req.param('state');
                newUser.zipcode = req.param('zipcode');
                newUser.email = req.param('email');
                newUser.age = req.param('age');
                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));



};
