import models from '../models/index';

export default class ItemHandler {
  getAllItems(req, res, next) {
    models.Item.findAll({
      include: [{
        model: Store,
        include: [StoreChain]
      }, ItemName]
    })
    .then((items) => {
      res.json(items);
    });
  }

  createItem(req, res, next) {
    models.Item.create({
      storeId: req.body.storeId,
      itemNameId: req.body.itemNameId,
      servingsPerUnit: req.body.servingsPerUnit,
      servingMetric: req.body.servingMetric
    })
    .then((item) => {
      res.json(item);
    });
  }

  getItemById(req, res, next) {
    models.Item.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreChain]
      }, ItemName]
    })
    .then((item) => {
      res.json(item);
    });
  }

  updateItem(req, res, next) {
    models.Item.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreChain]
      }, ItemName]
    })
    .then((item) => {
      if(item){
        var updateParams = req.body;
        return item.updateAttributes(updateParams)
      } else {
        throw Error("No Item Found to Update!")
      }
    })
    .then((item) => {
      res.send(item);
    });
  }

  deleteItem(req, res, next) {
    models.Item.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((item) => {
      res.json(item);
    });
  }

  getItemsByStoreId(req, res, next) {
    models.Item.findAll({
      where: {
        storeId: req.params.id
      },
      include: [{
        model: Store,
        include: [StoreChain]
      }, ItemName]
    })
    .then((items) => {
      res.json(items);
    });
  }
}
