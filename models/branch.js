'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Branch extends Model {}

  Branch.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    opening_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { sequelize })

  Branch.associate = function(models) {
    Branch.belongsToMany(models.Buffet, { through: models.BranchBuffet })
  };
  return Branch;
};