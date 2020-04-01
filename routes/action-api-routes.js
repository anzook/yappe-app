const actionController = require('../controllers/actionController')

module.exports = function (app) {
  // Matches with "/api/action"
  app.route("/api/actions")
    .post(actionController.create);

  // Matches with "/api/action/:id"
  app.route("/api/actions/:id")
    .put(actionController.update)
    .delete(actionController.delete);

  // Matches with "/api/actions/user"
  app.route('/api/actions/user/:id')
    .get(actionController.userLogsById);

  // Matches with "/api/actions/user/:id"
  app.route('/api/actions/user/:id/pet')
    .get(actionController.userLogsByPet);

  // Matches with "/api/actions/pet"
  app.route('/api/actions/pet/:id')
    .get(actionController.petActionsById);  
    
    // Matches with "/api/actions/pet/:id"
    app.route('/api/actions/pet/:id/user')
      .get(actionController.petActionsByUser);
};
