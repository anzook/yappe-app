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
  app.get('/api/user/:id', async ({ params }, res) => {
    let allInfo = []
    const user = await db.user.findAll({
      limit: 1,
      where: {
        id: params.id
      }
    })
      .catch(err => {
        console.log(err)
      })
    // let userArray = {};
    // userArray['user'] = user;
    allInfo.push(user);

    const userPets = await db.user_pet.findAll({
      where: {
        userId: params.id
      }
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

    pets.forEach(pet => {
      userPets.forEach(userPet => {
        let i = 0;
        if (pet.id === userPet.petId) {
          let petArray = {};
          petArray = [pet, userPet]
          allInfo.push(petArray);
        }
      })
    })
    console.log(allInfo[1])
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
