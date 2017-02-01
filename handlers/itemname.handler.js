var models = require('../models/index');

var ItemNameHandler = {
  getAllItemNames: function(req, res, next) {
    models.ItemName.findAll({
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        }]
      }]
    })
    .then(function(itemNames) {
      res.json(itemNames);
    });
  },

  createItemName: function(req, res, next) {
    models.ItemName.create({
      name: req.body.name
    }).then(function(itemName) {
      res.json(itemName);
    });
  },

  getItemNameById: function(req, res, next) {
    models.ItemName.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        }]
      }]
    }).then(function(itemName) {
      res.json(itemName);
    });
  },

  updateItemName: function(req, res, next) {
    models.ItemName.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        }]
      }]
    }).then(function(itemName) {
      if(itemName){
        var updateParams = req.body;

        itemName.updateAttributes(updateParams)
        .then(function(itemName) {
          res.send(itemName);
        });
      }
    });
  },

  deleteItemName: function(req, res, next) {
    models.ItemName.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(itemName) {
      res.json(itemName);
    });
  },



};

module.exports = ItemNameHandler;
