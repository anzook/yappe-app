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
    res.json(user);
  });

  // route gets all of the user's info including all of their pets
  app.get('/api/user/:id', async ({ params }, res) => {
    // get all columns that are associated with this user
    const userPets = await db.user.findAll({
      where: {
        id: params.id
      }, include: [db.pet]
    })
      .catch(err => {
        console.log(err)
      })

    // send allInfo array to front end
    res.json(userPets);
  });

  // route to update user
  app.put('/api/user', ({ body }, res) => {
    db.user.update(
      {
        name: body.name,
        email: body.email,
        password: body.password
      }, {
      where: {
        id: body.id
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