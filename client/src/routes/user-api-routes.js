// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
 
  app.post("/users", async (req, res) => {
    const user = await db.user.create(
      {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      }
      );
      console.log(user);
    res.json(user);
});

};
