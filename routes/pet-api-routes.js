
const db = require('../models');

module.exports = function (app) {

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

  app.patch("/api/pet", async (req, res) => {
    console.log(req.body);
    const pet = await db.pet.findOne({ where: { id: req.body.pet } });
    await pet.addUser(parseInt(req.body.user), { through: { role: req.body.role } });

    res.json(pet);
  });

  app.get('/api/pet/:id', ({ params }, res) => {
    db.pet.findOne({
      where: {
        id: params.id
      }
    })
      .then(pet => {
        // send back user data in json
        res.json(pet);
      })
      .catch(err => {
        console.log(err)
      })
  });

  // route to update user
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
