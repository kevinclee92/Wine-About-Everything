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

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
  
module.exports = router;
