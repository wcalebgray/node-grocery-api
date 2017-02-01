'use strict';
module.exports = function(sequelize, DataTypes) {
  var StoreName = sequelize.define('StoreName', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StoreName.hasMany(models.Store)
      }
    }
  });
  return StoreName;
};
