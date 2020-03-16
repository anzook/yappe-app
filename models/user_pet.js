module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("user_pet", {
          role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'Owner', 'Caretaker', 'Vet', 'Sitter', 'Groomer', 'Walker'
          ]]
        }
      },
    });
  
    return Role;
  };
    