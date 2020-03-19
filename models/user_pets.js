module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("user_pets", {
          role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'owner', 'caretaker', 'vet', 'sitter', 'groomer', 'walker'
          ]]
        }
      },
    });
  
    return Role;
  };
    