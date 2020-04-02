// require controller
const petController = require('../controllers/petController');


module.exports = function (app) {

  isAuthenticated = function(req,res,next){
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
  
  }

  app.route("/api/pet", isAuthenticated)
    .post(petController.create);

    app.route("/api/pets", isAuthenticated)
    .get(petController.findAllById);

  app.route("/api/pet/:id", isAuthenticated)
    .patch(petController.joinUser)
    .get(petController.findById)
    .put(petController.update)
    .delete(petController.delete);
    
};
