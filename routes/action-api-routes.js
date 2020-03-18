
const db = require('../models');

module.exports = function(app) {

  app.post("/actions", async (req, res) => {
    const action = await db.action.create(
      {
        type: req.body.type,
        detail: req.body.detail,
        userId: req.body.user,
        petId: req.body.pet
      }
      );
      // docs made it seem like this would work, but adding it directly is easier and faster
    // await action.addUser(parseInt(req.body.user));
    // await action.addPet(parseInt(req.body.pet));

    res.json(action)
});

app.patch("/actions", async (req, res) => {
    const action = await db.action.findOne({where: {id: req.body.action}});
    await action.update(
        {
          type: req.body.type,
          detail: req.body.detail,
          userId: req.body.user,
          petId: req.body.pet
        }
        );
    res.json(action);
});

app.delete("/actions", async (req, res) => {
  const action = await db.action.destroy({where: {id: req.body.action}});

  res.json(action);
});


};
