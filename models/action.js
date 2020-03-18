module.exports = function(sequelize, DataTypes) {
    const Action = sequelize.define("Action", {
          type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'pee', 'poop', 'walk', 'play', 'groom', 'bath', 'checkup', 'meds'
          ]]
        }
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });

    Action.associate = function(models) {
        Action.belongsTo(models.User);
        Action.belongsTo(models.Pet);
      }
  
    return Action;
  };
    