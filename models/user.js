module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
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
    User.belongsToMany(models.Pet, { through: 'User_Pets' });
    User.hasMany( models.Action );

  }

  

  return User;
};
