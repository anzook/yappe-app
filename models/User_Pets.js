module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("User_Pet", {
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
    