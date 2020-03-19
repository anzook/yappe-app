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
    const pet = await db.pet.findOne({where: {id: req.body.pet}})
    .catch(err => {
      console.log(err)
    });
    await pet.addUser(parseInt(req.body.user), {through: {role: req.body.role}})
    .catch(err => {
      console.log(err)
    });
    res.json(pet);
});

  // route gets all of the pet's info including all of their users
  app.get('/api/pet/:id', async ({ params }, res) => {
    const petUsers = await db.pet.findAll({
      where: {
        id: params.id
      }, 
      // include user info through association
      include:[db.user]
    })
      .catch(err => {
        console.log(err)
      })

    // send allInfo array to frontend
    res.json(petUsers)
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

  // route to delete pet
  app.delete("/api/pet", async (req, res) => {
    const pet = await db.pet.destroy({ where: { id: req.body.pet } });

    res.json(pet);
  });


};