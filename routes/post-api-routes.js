const postController = require('../controllers/postController')

module.exports = function (app) {
  isAuthenticated = function(req,res,next){
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
  }

  // Matches with "/api/posts"
  app.route("/api/posts", isAuthenticated)
    .post(postController.create);

  // Matches with "/api/posts/:id"
  app.route("/api/posts/:id", isAuthenticated)
    .get(postController.find)
    .put(postController.update)
    .delete(postController.delete);

  // Matches with "/api/actions/user"
  app.route('/api/posts/pets/:id', isAuthenticated)
    .get(postController.postsById);

};
