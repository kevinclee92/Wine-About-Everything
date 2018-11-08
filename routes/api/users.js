const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require('passport');


var isAuthenticated = function (req, res, next) {
  if (req.user) { 
    console.log("req.user is authenticated", req.user);
    next();
    return;
  }
  else {
    console.log("authenticate failed")
    res.send("NoAuth");
  }
  
}

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(passport.authenticate('signup', function(res) {
  console.log("response to signup", res);
}))

//   .post(usersController.create)

/* Handle Login POST */
  router.post('/login', passport.authenticate('login'), 
    (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
        user: req.user
      };
      res.send(userInfo);
    }
  );

// router.route("/notes").get(usersController.)

router.route("/:username").get(usersController.findByUsername);
router.route("/:username").put(usersController.updateByUsername);

// Matches with "/api/users/:id"
router
  .route("/id/:id")
  .get(isAuthenticated, usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)
  .delete(usersController.removeNote);
  
  // "/api/users/logout"
  router.route('/logout')
  .post((req, res) => {
    if (req.user) {
        console.log("LOGGIN OUT: ", req.user)
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
  });

router.route("/stored").get(isAuthenticated, usersController.findById);
module.exports = router;
