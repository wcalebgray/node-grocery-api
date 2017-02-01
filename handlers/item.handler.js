var models = require('../models/index');

var ItemHandler = {
  getAllItems: function(req, res, next) {
    models.Item.findAll({
      include: [{
        model: Store,
        include: [StoreName]
      }, ItemName]
    })
    .then(function(items) {
      res.json(items);
    });
  },

  createItem: function(req, res, next) {
    models.Item.create({
      storeId: req.body.storeId,
      itemNameId: req.body.itemNameId,
      servingsPerUnit: req.body.servingsPerUnit,
      servingMetric: req.body.servingMetric
    }).then(function(item) {
      res.json(item);
    });
  },

  getItemById: function(req, res, next) {
    models.Item.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreName]
      }, ItemName]
    }).then(function(item) {
      res.json(item);
    });
  },

  updateItem: function(req, res, next) {
    models.Item.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreName]
      }, ItemName]
    }).then(function(item) {
      if(item){
        var updateParams = req.body;

        item.updateAttributes(updateParams)
        .then(function(item) {
          res.send(item);
        });
      }
    });
  },

  deleteItem: function(req, res, next) {
    models.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(item) {
      res.json(item);
    });
  },

  getItemsByStoreId: function(req, res, next) {
    models.Item.findAll({
      where: {
        storeId: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreName]
      }, ItemName]
    })
    .then(function(item) {
      res.json(item);
    });
  }



};

module.exports = ItemHandler;
