'use strict';
module.exports = function(sequelize, DataTypes) {
  var StoreChain = sequelize.define('StoreChain', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StoreChain.hasMany(models.Store)
      }
    }
  });
  return StoreChain;
};
