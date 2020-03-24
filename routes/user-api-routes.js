// require controller
const userController = require('../controllers/userController');
const passport = require('../config/passport')

module.exports = function (app) {
  // Matches with "/api/user"
  app.route("/api/user")
    .get(userController.userInfo)
    .post(userController.create);

  // Matches with "/api/user/:id"
  app.route('/api/user/:id')
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