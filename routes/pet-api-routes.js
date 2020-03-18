const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

module.exports = function (app) {
  // route to create pet
  app.post("/api/pet", async (req, res) => {
    const pet = await db.pet.create(
      {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        breed: req.body.breed,
      }
    );
    await pet.addUser(req.body.user, {
      through:
      {
        role: req.body.role
      }
    });

    res.json(pet)
  });

  // route that links users and pets in the pivot table
  app.patch("/api/pet", async (req, res) => {
    console.log(req.body);
    const pet = await db.pet.findOne({ where: { id: req.body.pet } });
    await pet.addUser(parseInt(req.body.user), { through: { role: req.body.role } });

    res.json(pet);
  });

  // route gets all of the pet's info including all of their users
  app.get('/api/pet/:id', async ({ params }, res) => {
    // array to hold all of the pet's information
    let allInfo = [];

    // get current pet
    const pet = await db.pet.findOne({
      where: {
        id: params.id
      }
    })
      .catch(err => {
        console.log(err)
      })

    // push user info into allInfo array
    allInfo.push(pet);

    // get all columns that are associated with this pet
    const petUsers = await db.user_pet.findAll({
      where: {
        petId: params.id
      }
    })
      .catch(err => {
        console.log(err)
      })

    // store ids of all caretakers
    const userIDs = []
    petUsers.forEach(user => {
      userIDs.push(user.userId)
    })

    // find the user information for the pet's user
    const users = await db.user.findAll({
      where: {
        id: {
          [Op.or]: userIDs
        }
      }
    })
      .catch(err => {
        console.log(err)
      });

    // a loop that links the user with the user_pet info
    users.forEach(user => {
      petUsers.forEach(petUser => {
        if (user.id === petUser.userId) {
          let userArray = {};
          userArray = [user, petUser]
          allInfo.push(userArray);
        }
      })
    })

    // send allInfo array to frontend
    res.json(allInfo)
  });

  // route to update pet
  app.put('/api/pet', ({ body }, res) => {
    db.pet.update(
      {
        name: body.name,
        age: body.age,
        sex: body.sex,
        breed: body.breed,
      }, {
      where: {
        id: body.id
      }
    })
      .then(updatedPet => {
        res.json(updatedPet)
      })
      .catch(err => {
        console.log(err)
      })
  })

  app.delete("/api/pet", async (req, res) => {
    const pet = await db.pet.destroy({ where: { id: req.body.pet } });

    res.json(pet);
  });


};