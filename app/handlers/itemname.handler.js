import models from '../models/index';

export default class ItemNameHandler {
  getAllItemNames(req, res, next) {
    models.ItemName.findAll({
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        }]
      }]
    })
    .then((itemNames) => {
      res.json(itemNames);
    });
  }

  createItemName(req, res, next) {
    models.ItemName.create({
      name: req.body.name
    }).then((itemName) => {
      res.json(itemName);
    });
  }

  getItemNameById(req, res, next) {
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
    })
    .then((itemName) => {
      res.json(itemName);
    });
  }

  updateItemName(req, res, next) {
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
    })
    .then((itemName) => {
      if(itemName){
        var updateParams = req.body;
        return itemName.updateAttributes(updateParams)
      } else {
        throw new Error("No ItemName Found to Update!");
      }
    })
    .then((itemName) => {
      res.send(itemName);
    });
  }

  deleteItemName(req, res, next) {
    models.ItemName.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((itemName) => {
      res.json(itemName);
    });
  }
}
