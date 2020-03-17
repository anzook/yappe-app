// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function (app) {

  app.post("/users", async (req, res) => {
    const user = await db.user.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    ).catch(err => {
      console.log(err)
    })
    console.log(user);
    res.json(user);
  });

  app.get('/user/:id', ({params}, res) => {
    db.user.findAll({
      limit: 1,
      where: {
        id: params.id
      }
    }).then(user => {
      res.json(user);
    }).catch(err => {
      console.log(err)
    })
  })

};
