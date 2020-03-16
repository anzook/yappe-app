module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("role", {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          role_type: {
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
    