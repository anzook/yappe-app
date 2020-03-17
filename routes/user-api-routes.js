// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function (app) {
  // route to create user
  app.post("/api/user", async (req, res) => {
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

  // route one user's info
  app.get('/api/user/:id', ({ params }, res) => {
    db.user.findAll({
      limit: 1,
      where: {
        id: params.id
      }
    })
      .then(user => {
        // send back user data in json
        res.json(user);
      })
      .catch(err => {
        console.log(err)
      })
  });

  // route to update user
  app.put('/api/user/:id', ({ body, params }, res) => {
    db.user.update(
      {
        name: body.name,
        email: body.email,
        password: body.password
      }, {
      where: {
        id: params.id
      }
    })
      .then(updatedUser => {
        res.json(updatedUser)
      })
      .catch(err => {
        console.log(err)
      })
  })
};
