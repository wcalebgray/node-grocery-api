'use strict';
module.exports = function(sequelize, DataTypes) {
  var ItemName = sequelize.define('ItemName', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ItemName.hasMany(models.Item)
      }
    }
  });
  return ItemName;
};
