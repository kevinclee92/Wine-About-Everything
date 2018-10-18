const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require('passport');


// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(passport.authenticate('signup', {
  successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash : true
}))
//   .post(usersController.create)

/* Handle Login POST */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/user',
    failureRedirect: '/',
    failureFlash : true 
  }));


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
  
module.exports = router;
