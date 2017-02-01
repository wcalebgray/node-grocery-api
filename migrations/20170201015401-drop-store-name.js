'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Stores', 'name');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Stores', 'name', Sequelize.STRING);
  }
};
