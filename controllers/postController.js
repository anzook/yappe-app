const db = require('../models');

// Defining methods for the postController
module.exports = {
    // function to create post
    create: async (req, res) => {
        const post = await db.post.create(
            {
                author: req.body.author,
                post: req.body.post,
                petId: req.body.petId,
                type: req.body.type
            }
        );

        res.json(post)
    },
    // function to update post
    update: async (req, res) => {
        const post = await db.post.findOne({ where: { id: req.params.id } });
        await post.update(
            {
                post: req.body.post
            }
        );
        res.send(post + ' post updated!')

    },
    // function to get posts that user logged for all their pets
    postsById: async ({ params }, res) => {
        const posts = await db.post.findAll({
            where: {
                petId: params.id
            }
        }).catch(err => {
            console.log(err);
        })

        res.json(posts);
    },

    // function to delete post
    delete: async ({ params }, res) => {
        const post = await db.post.destroy({ where: { id: params.id } });

        res.json(post);
    },

      // function to delete post
      find: async ({ params }, res) => {
        const post = await db.post.findOne({ where: { id: params.id } });

        res.json(post);
    }
}