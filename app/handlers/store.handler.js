import models from '../models/index';

export default class StoreHandler {
  getAllStores(req, res, next) {
    models.Store.findAll({
      include: [StoreChain]
    })
    .then((stores) => {
      res.json(stores);
    });
  }

  createStore(req, res, next) {
    models.Store.create({
      StoreChainId: req.body.StoreChainId,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    })
    .then((store) => {
      res.json(store);
    });
  }

  getStoreById(req, res, next) {
    models.Store.find({
      where: {
        id: req.params.id
      },
      include: [StoreChain]
    })
    .then((store) => {
      res.json(store);
    });
  }

  updateStore(req, res, next) {
    models.Store.find({
      where: {
        id: req.params.id
      },
      include: [StoreChain]
    })
    .then((store) => {
      if(store){
        var updateParams = req.body;
        return store.updateAttributes(updateParams)
      } else {
        throw new Error("No Store Found to Update!");
      }
    })
    .then((store) => {
      res.send(store);
    });
  }

  deleteStore(req, res, next) {
    models.Store.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((store) => {
      res.json(store);
    });
  }
}
