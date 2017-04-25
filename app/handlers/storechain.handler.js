import models from '../models/index';

export default class StoreChainHandler {
  getAllStoreChains(req, res, next) {
    models.StoreChain.findAll({
      include: [Store]
    })
    .then((StoreChains) => {
      res.json(StoreChains);
    });
  }

  createStoreChain(req, res, next) {
    models.StoreChain.create({
      name: req.body.name
    })
    .then((StoreChain) => {
      res.json(StoreChain);
    });
  }

  getStoreChainById(req, res, next) {
    models.StoreChain.find({
      where: {
        id: req.params.id
      }
    })
    .then((StoreChain) => {
      res.json(StoreChain);
    });
  }

  updateStoreChain(req, res, next) {
    models.StoreChain.find({
      where: {
        id: req.params.id
      }
    })
    .then((StoreChain) => {
      if(StoreChain){
        var updateParams = req.body;
        return StoreChain.updateAttributes(updateParams)
      } else {
        throw new Error("No Store Found to Update!");
      }
    })
    .then((StoreChain) => {
      res.send(StoreChain);
    });
  }

  deleteStoreChain(req, res, next) {
    models.StoreChain.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((StoreChain) => {
      res.json(StoreChain);
    });
  }
}
