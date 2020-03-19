const db = require('../models');

// Defining methods for the actionController
module.exports = {
// function to create action
    create: async (req, res) => {
        const action = await db.action.create(
            {
                type: req.body.type,
                detail: req.body.detail,
                userId: req.body.user,
                petId: req.body.pet
            }
        );

        res.json(action)
    },
  // function to update action
    update: async (req, res) => {
        const action = await db.action.findOne({ where: { id: req.params.id } });
        await action.update(
            {
                type: req.body.type,
                detail: req.body.detail,
                petId: req.body.pet
            }
        );
        res.json(action);
    },
  // function to get actions that user logged for all their pets
    userLogsById: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                userId: params.id
            },
            include: [db.pet]
        }).catch(err => {
            console.log(err);
        })

        res.json(actions);
    },
  // function to get actins of pet
    petActionsById: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                petId: params.id
            },
            // include user info through association
            include: [db.user]
        }).catch(err => {
            console.log(err);
        })

        res.json(actions);
    },
  // function to delete action
    delete: async ({ params }, res) => {
        const action = await db.action.destroy({ where: { id: params.id } });

        res.json(action);
    }
}