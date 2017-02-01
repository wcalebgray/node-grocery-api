var models = require('../models/index');

var StoreHandler = {
  getAllStores: function(req, res, next) {
    models.Store.findAll({
      include: [StoreName]
    })
    .then(function(stores) {
      res.json(stores);
    });
  },

  createStore: function(req, res, next) {
    models.Store.create({
      storeNameId: req.body.storeNameId,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }).then(function(store) {
      res.json(store);
    });
  },

  getStoreById: function(req, res, next) {
    models.Store.find({
      where: {
        id: req.params.id
      },
      include: [StoreName]
    }).then(function(store) {
      res.json(store);
    });
  },

  updateStore: function(req, res, next) {
    models.Store.find({
      where: {
        id: req.params.id
      },
      include: [StoreName]
    }).then(function(store) {
      if(store){
        var updateParams = req.body;

        store.updateAttributes(updateParams)
        .then(function(store) {
          res.send(store);
        });
      }
    });
  },

  deleteStore: function(req, res, next) {
    models.Store.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(store) {
      res.json(store);
    });
  },



};

module.exports = StoreHandler;
