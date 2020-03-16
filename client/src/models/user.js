module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
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
    User.belongsToMany(models.pet, { through: 'role' });
  }

  return User;
};
