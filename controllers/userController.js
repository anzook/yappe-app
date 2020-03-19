const db = require('../models');

// Defining methods for the userController
module.exports = {
    findById: async ({ params }, res) => {
        const userPets = await db.user.findAll({
            where: {
                id: params.id
            },
            // include pet info through association
            include: [db.pet]
        })
            .catch(err => {
                console.log(err)
            })

        res.json(userPets);

    },

    create: async (req, res) => {
        const user = await db.user.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        ).catch(err => {
            console.log(err)
        })
        res.json(user);
    },

    update: ({ params, body }, res) => {
        db.user.update(
            {
                name: body.name,
                email: body.email,
                password: body.password
            }, {
            where: {
                id: params.id
            }
        })
            .then(updatedUser => {
                res.send(updatedUser + ' user updated!')
            })
            .catch(err => {
                console.log(err)
            })
    },

}
