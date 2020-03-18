module.exports = function(sequelize, DataTypes) {
    const Action = sequelize.define("action", {
          type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'Pee', 'Poop', 'Walk', 'Play', 'Groom', 'Bath', 'Checkup', 'Meds'
          ]]
        }
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });

    Action.associate = function(models) {
        Action.belongsTo(models.user);
        Action.belongsTo(models.pet);
      }
  
    return Action;
  };
    