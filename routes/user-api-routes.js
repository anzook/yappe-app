// require controller
const userController = require('../controllers/userController');

module.exports = function (app) {
  // Matches with "/api/user"
  app.route("/api/user")
    .post(userController.create);

  // Matches with "/api/user/:id"
  app.route('/api/user/:id')
    .get(userController.findById)
    .put(userController.update);
};