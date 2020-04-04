const db = require('../models');

// Defining methods for the petController
module.exports = {
    // function to create pet
    create: async (req, res) => {
        const pet = await db.pet.create(
            {
                name: req.body.name,
                age: req.body.age,
                sex: req.body.sex,
                breed: req.body.breed,
                pictureLink: req.body.pictureLink
            }
        );
        await pet.addUser(req.body.user, {
            through:
            {
                role: req.body.role
            }
        });

        res.json(pet);
    },

    // function to link users and pets in the pivot table
    joinUser: async (req, res) => {
        const pet = await db.pet.findOne({ where: { id: req.params.id } })
            .catch(err => {
                console.log(err)
            });
        await pet.addUser(parseInt(req.body.user), { through: { role: req.body.role } })
            .catch(err => {
                console.log(err)
            });
        res.json(pet);
    },

    // function that gets all of the pet's info including all of their users
    findById: async ({ params }, res) => {
        const petUsers = await db.pet.findOne({
            where: {
                id: params.id
            },
            // include user info through association
            include: [{
                model: db.user,
                attributes: {exclude: [
                    'createdAt',
                    'updatedAt',
                    'password'
                ]}, 
                required: false
            }]
        })
            .catch(err => {
                console.log(err)
            })
        res.json(petUsers);
    },
     // function that gets all of the pet's info including all of their users
     findAllById: async ({ body }, res) => {
        const petUsers = await db.pet.findAll({
            where: {
                id: body.id
            },
            // include user info through association
            include: [{
                model: db.user,
                attributes: {exclude: [
                    'createdAt',
                    'updatedAt',
                    'password'
                ]}, 
                required: false
            }]
        })
            .catch(err => {
                console.log(err)
            })
        res.json(petUsers)
    },
    // route to update pet
    update: ({ params, body }, res) => {
        db.pet.update(
            {
                name: body.name,
                age: body.age,
                sex: body.sex,
                breed: body.breed,
            }, {
            where: {
                id: params.id
            }
        })
            .then(updatedPet => {
                res.send(updatedPet + ' pet updated!')

            })
            .catch(err => {
                console.log(err)
            })
    },
      // function to delete pet
    delete: async ({ params }, res) => {
        const pet = await db.pet.destroy({ where: { id: params.id } });
    
        res.json(pet);
      }
}