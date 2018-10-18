var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var passport = require('../../config/passport');

/* Handle Registration POST */
// router.post('/', function() {
//     passport.authenticate('signup', {
//       successRedirect: '/',
//       failureRedirect: '/signup',
//       failureFlash : true 
//     })
// });

module.exports = router;