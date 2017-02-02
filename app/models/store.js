'use strict';
module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define('Store', {
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Store.hasMany(models.Item),
        Store.belongsTo(models.StoreName),
        Store.belongsToMany(models.User, {through: 'UserStore'})
      }
    }
  });
  return Store;
};
