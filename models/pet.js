module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define("pet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // ====Validations====
      validate: {
        isNumeric: true,
        max: 29, // only allow values <= 29
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictureLink: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
  });

  Pet.associate = function(models) {
    Pet.belongsToMany(models.user, { through: 'user_pets' });
    Pet.hasMany( models.action );
    Pet.hasMany( models.post );
  }


  return Pet;
};