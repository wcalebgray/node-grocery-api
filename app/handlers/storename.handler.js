import models from '../models/index';

export default class StoreNameHandler {
  getAllStoreNames(req, res, next) {
    models.StoreName.findAll({
      include: [Store]
    })
    .then((storeNames) => {
      res.json(storeNames);
    });
  }

  createStoreName(req, res, next) {
    models.StoreName.create({
      name: req.body.name
    })
    .then((storeName) => {
      res.json(storeName);
    });
  }

  getStoreNameById(req, res, next) {
    models.StoreName.find({
      where: {
        id: req.params.id
      }
    })
    .then((storeName) => {
      res.json(storeName);
    });
  }

  updateStoreName(req, res, next) {
    models.StoreName.find({
      where: {
        id: req.params.id
      }
    })
    .then((storeName) => {
      if(storeName){
        var updateParams = req.body;
        return storeName.updateAttributes(updateParams)
      } else {
        throw new Error("No Store Found to Update!");
      }
    })
    .then((storeName) => {
      res.send(storeName);
    });
  }

  deleteStoreName(req, res, next) {
    models.StoreName.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((storeName) => {
      res.json(storeName);
    });
  }
}
