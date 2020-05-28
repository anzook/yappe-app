module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define("post", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[
          'note', 'question'
        ]]
      }
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.pet);
  };

  return Post;
};
