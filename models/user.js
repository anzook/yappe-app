module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // ====Validations====
        validate: {
          len: [1, 40],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      }
  });

  User.associate = function(models) {
    User.belongsToMany(models.pet, { through: 'user_pet' });
  }

  return User;
};
