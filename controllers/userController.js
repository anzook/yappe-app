const db = require('../models');
const passport = require('../config/passport')

// Defining methods for the userController
module.exports = {
    findById: async (req, res) => {
        console.log("Finding by ID...")
        const userPets = await db.user.findOne({
            where: {
                id: req.params.id
            },
            // include pet info through association
            include: [{
                model: db.pet,
                attributes: {exclude: [
                    'createdAt',
                    'updatedAt'
                ]}, 
                required: false
            }]
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
            },
        ).catch(err => {
            console.log(err)
        })
        res.json(user.id);
    },

    update: ({ params, body }, res) => {
        db.user.update(
            {
                name: body.name,
                email: body.email,
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

    userInfo: function(req, res) {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        } else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          res.json({
            name: req.user.name,
            email: req.user.email,
            id: req.user.id,
          });
        }
      }

}
