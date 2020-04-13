module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define("post", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.pet);
  };

  return Post;
};
