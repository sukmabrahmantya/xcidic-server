'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Buffet extends Model {}

  Buffet.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { sequelize });

  Buffet.associate = function(models) {
    Buffet.belongsToMany(models.Branch, { through: models.BranchBuffet })
  };
  return Buffet;
};