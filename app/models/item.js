'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    servingsPerUnit: DataTypes.DECIMAL,
    servingMetric: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(models.Store),
        Item.belongsTo(models.ItemName),
        Item.hasMany(models.Purchase)
      }
    }
  });
  return Item;
};
