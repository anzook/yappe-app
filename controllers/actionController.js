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
        res.send(action + ' action updated!')

    },
    // function to get actions that user logged for all their pets
    userLogsById: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                userId: params.id
            },
            order: [['createdAt', 'DESC']],
            include: [{
                model: db.pet,
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                },  
                required: false
            }]
        }).catch(err => {
            console.log(err);
        })

        res.json(actions);
    },

    // function to get actions that user logged for specfic pet
    userLogsByPet: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                userId: params.id,
                petID: params.pet
            },
            include: [{
                model: db.pet,
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                },
                required: false
            }]
        }).catch(err => {
            console.log(err);
        })

        res.json(actions);
    },

    // function to get actions of pet
    petActionsById: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                petId: params.id
            },
            order: [[
                'updatedAt', 'DESC'
            ]],
            // include user info through association
            include: [{
                model: db.user,
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt',
                        'email',
                        'password'
                    ]
                },
                required: false,
            }]
        }).catch(err => {
            console.log(err);
        })

        res.json(actions)
    },

    // function to get actions of pet logged by specfic user
    petActionsByUser: async ({ params }, res) => {
        const actions = await db.action.findAll({
            where: {
                userId: params.user,
                petID: params.id
            },
            include: [{
                model: db.pet,
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                },
                required: false
            }]
        }).catch(err => {
            res.send(err);
        })

        res.json(actions);
    },

    // function to delete action
    delete: async ({ params }, res) => {
        const action = await db.action.destroy({ where: { id: params.id } });

        res.json(action);
    }
}