const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require('passport');


// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(passport.authenticate('signup', function() {
  console.log("is it working?")
},{
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash : true
}))

//   .post(usersController.create)

/* Handle Login POST */
  router.post('/login', passport.authenticate('login'), 
    (req, res) => {
      console.log(req.user);
      // console.log('logged in', req.user);
      var userInfo = {
        user: req.user
      };
      res.send(userInfo);
    }
  );

router.route("/:username").get(usersController.findByUsername);

// Matches with "/api/users/:id"
router
  .route("/id/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
  
module.exports = router;
