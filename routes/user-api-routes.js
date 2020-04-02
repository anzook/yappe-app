// require controller
const userController = require('../controllers/userController');
const passport = require('../config/passport')



module.exports = function (app) {

isAuthenticated = function(req,res,next){
  if(req.user)
     return next();
  else
     return res.status(401).json({
       error: 'User not authenticated'
     })

}
  // Matches with "/api/user"
  app.route("/api/user")
    .post(userController.create);

// Route for getting some data about our user to be used client side
app.get('/api/user', function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
    console.log("error retrieving user info")
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      name: req.user.name,
      email: req.user.email,
      id: req.user.id,
    });
  }
});

  // Matches with "/api/user/:id"
  app.route('/api/user/:id', isAuthenticated)
    .get(userController.findById)
    .put(userController.update);

//passpoer user routes
     // Matches with "/api/user/login"
 app.post('/login', passport.authenticate('local'), function(req, res) {
  res.json(req.user);
});

// Route for logging user out
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

  

};