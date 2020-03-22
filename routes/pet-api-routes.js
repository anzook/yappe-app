// require controller
const petController = require('../controllers/petController');


module.exports = function (app) {

  app.route("/api/pet")
    .post(petController.create);

  app.route("/api/pet/:id")
    .patch(petController.joinUser)
    .get(petController.findById)
    .put(petController.update)
    .delete(petController.delete);
    
};
