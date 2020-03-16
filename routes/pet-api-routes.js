
const db = require('../models');

module.exports = function(app) {

  app.post("/pets", async (req, res) => {
    const pet = await db.pet.create(
      {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        breed: req.body.breed,
      }
      );
    await pet.addUser(req.body.user, {through: 
      {
        role: req.body.role
      }
    });

    res.json(pet)
});

app.patch("/pets", async (req, res) => {
    const pet = await db.pet.findOne({where: {id: req.body.pet}});
    await pet.addUser(parseInt(req.body.user), {through: {role: req.body.role}});

    res.json(pet);
});

app.delete("/pets", async (req, res) => {
  const pet = await db.pet.destroy({where: {id: req.body.pet}});

  res.json(pet);
});


};
