'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class BranchBuffet extends Model {}

  BranchBuffet.init({
    BranchId: DataTypes.INTEGER,
    BuffetId: DataTypes.INTEGER
  }, { sequelize });
  
  BranchBuffet.associate = function(models) {

  };
  return BranchBuffet;
};