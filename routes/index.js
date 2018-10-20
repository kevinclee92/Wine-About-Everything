const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const flash = require("connect-flash");

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

  // API Routes 
  router.use("/api", apiRoutes);

  // If no API routes are hit, send the React app
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });


  /* GET login page. */
  router.get('/', function(req, res) {
    // Display the Login page with any flash message, if any
    res.render('index', { message: req.flash('message') });
  });
 
  /* Handle Login POST */
  // router.post('/', passport.authenticate('login', {
  //   successRedirect: '/user',
  //   failureRedirect: '/',
  //   failureFlash : true 
  // }));
 
  /* GET Registration Page */
  // router.get('/', function(req, res){
  //   res.render('register',{message: req.flash('message')});
  // });


 router.get('/user', isAuthenticated, function(req, res){
   console.log("working?", req.user)
    res.send({ user: req.user });
 });

 router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})


module.exports = router;

