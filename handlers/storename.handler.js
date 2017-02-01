var models = require('../models/index');

var StoreNameHandler = {
  getAllStoreNames: function(req, res, next) {
    models.StoreName.findAll({
      include: [Store]
    })
    .then(function(storeNames) {
      res.json(storeNames);
    });
  },

  createStoreName: function(req, res, next) {
    models.StoreName.create({
      name: req.body.name
    }).then(function(storeName) {
      res.json(storeName);
    });
  },

  getStoreNameById: function(req, res, next) {
    models.StoreName.find({
      where: {
        id: req.params.id
      }
    }).then(function(storeName) {
      res.json(storeName);
    });
  },

  updateStoreName: function(req, res, next) {
    models.StoreName.find({
      where: {
        id: req.params.id
      }
    }).then(function(storeName) {
      if(storeName){
        var updateParams = req.body;

        storeName.updateAttributes(updateParams)
        .then(function(storeName) {
          res.send(storeName);
        });
      }
    });
  },

  deleteStoreName: function(req, res, next) {
    models.StoreName.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(storeName) {
      res.json(storeName);
    });
  },



};

module.exports = StoreNameHandler;
