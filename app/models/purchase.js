'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    date: DataTypes.DATE,
    costPerUnit: DataTypes.DECIMAL,
    units: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Purchase.belongsTo(models.Item)
      }
    }
  });
  return Purchase;
};
