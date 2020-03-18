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

  // route gets all of the user's info including all of their pets
  app.get('/api/user/:id', async ({ params }, res) => {
    // array to hold all of the user's information
    let allInfo = [];

    // get current user
    const user = await db.user.findAll({
      limit: 1,
      where: {
        id: params.id
      }
    })
      .catch(err => {
        console.log(err)
      })

    // push user info into allInfo array
    allInfo.push(user);

    // get all columns that are associated with this user
    const userPets = await db.user_pet.findAll({
      where: {
        userId: params.id
      }
    })
      .catch(err => {
        console.log(err)
      })

    // store ids of all pets
    const petIDs = []
    userPets.forEach(pet => {
      petIDs.push(pet.petId)
    })

    // find the pet information for the user's pets
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

      // a loop that links the pet with the user_pet info
    pets.forEach(pet => {
      userPets.forEach(userPet => {
        if (pet.id === userPet.petId) {
          let petArray = {};
          petArray = [pet, userPet]
          allInfo.push(petArray);
        }
      })
    })

    // send allInfo array to front end
    res.json(allInfo)
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