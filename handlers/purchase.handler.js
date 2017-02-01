var models = require('../models/index');

var PurchaseHandler = {
  getAllPurchases: function(req, res, next) {
    models.Purchase.findAll({
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    })
    .then(function(purchases) {
      res.json(purchases);
    });
  },

  getAllPurchasesByDate: function(req, res, next){
    var startTime = new Date(req.params.startTime).toISOString();
    var endTime = new Date(req.params.endTime).toISOString();
    models.Purchase.findAll({
      where: {
        createdAt: {
          $between: [req.params.startTime, req.params.endTime]
        }
      },
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    })
    .then(function(purchases) {
      res.json(purchases);
    });
  },

  createPurchase: function(req, res, next) {
    models.Purchase.create({
      itemId: req.body.itemId,
      date: req.body.date,
      costPerUnit: req.body.costPerUnit,
      units: req.body.units
    }).then(function(purchase) {
      res.json(purchase);
    });
  },

  getPurchaseById: function(req, res, next) {
    models.Purchase.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    }).then(function(purchase) {
      res.json(purchase);
    });
  },

  updatePurchase: function(req, res, next) {
    models.Purchase.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    }).then(function(purchase) {
      if(purchase){
        var updateParams = req.body;

        purchase.updateAttributes(updateParams)
        .then(function(purchase) {
          res.send(purchase);
        });
      }
    });
  },

  deletePurchase: function(req, res, next) {
    models.Purchase.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(purchase) {
      res.json(purchase);
    });
  },

  getLastPurchaseByItemId: function(req, res, next){
    models.Purchase.findAll({
      limit: 1,
      where: {
        itemId: req.params.id
      },
      order: [ [ 'createdAt', 'DESC' ]],
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    })
    .then(function(purchase) {
      res.json(purchase);
    });
  }



};

module.exports = PurchaseHandler;
