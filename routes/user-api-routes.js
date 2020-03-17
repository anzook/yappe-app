// Requiring our models and passport as we've configured it
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
      },
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

  // route to get all pets of user
  app.get('/api/user_pets/:id', async ({ params }, res) => {
    const userPets = await db.user_pet.findAll({
      where: {
        userId: params.id
      },
    })
      .catch(err => {
        console.log(err)
      })
    const petIDs = []
    userPets.forEach(pet => {
      petIDs.push(pet.petId)
    })

    const pets = await db.pet.findAll({
      where: {
        id: {
          [Op.or]: petIDs
        }
      }
    })
      .catch(err => {
        console.log(err)
      });

    let allPets = []
    pets.forEach(pet => {
      userPets.forEach(userPet => {
        if (pet.id === userPet.petId) {
          let petArray = {};
          petArray = [pet, userPet]
          allPets.push(petArray);
        }
      })
    })

    res.json(allPets)
  })
};
