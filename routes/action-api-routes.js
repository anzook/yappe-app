const actionController = require('../controllers/actionController')

module.exports = function (app) {
  isAuthenticated = function(req,res,next){
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
  
  }

  // Matches with "/api/action"
  app.route("/api/actions", isAuthenticated)
    .post(actionController.create);

  // Matches with "/api/action/:id"
  app.route("/api/actions/:id", isAuthenticated)
    .put(actionController.update)
    .delete(actionController.delete);

  // Matches with "/api/actions/user"
  app.route('/api/actions/user/:id', isAuthenticated)
    .get(actionController.userLogsById);

  // Matches with "/api/actions/user/:id"
  app.route('/api/actions/user/:id/pet/:pet', isAuthenticated)
    .get(actionController.userLogsByPet);

  // Matches with "/api/actions/pet"
  app.route('/api/actions/pet/:id', isAuthenticated)
    .get(actionController.petActionsById);  
    
    // Matches with "/api/actions/pet/:id"
    app.route('/api/actions/pet/:id/user/:user', isAuthenticated)
      .get(actionController.petActionsByUser);
};
