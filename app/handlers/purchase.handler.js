import models from '../models/index';

export default class PurchaseHandler {
  getAllPurchases(req, res, next) {
    models.Purchase.findAll({
      include: [{
        model: Item,
        include: [{
          model: Store,
          include: [StoreName]
        },ItemName]
      }]
    })
    .then((purchases) => {
      res.json(purchases);
    });
  }

  getAllPurchasesByDate(req, res, next){
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
    .then((purchases) => {
      res.json(purchases);
    });
  }

  createPurchase(req, res, next) {
    models.Purchase.create({
      itemId: req.body.itemId,
      date: req.body.date,
      costPerUnit: req.body.costPerUnit,
      units: req.body.units
    })
    .then((purchase) => {
      res.json(purchase);
    });
  }

  getPurchaseById(req, res, next) {
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
    })
    .then((purchase) => {
      res.json(purchase);
    });
  }

  updatePurchase(req, res, next) {
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
    })
    .then((purchase) => {
      if(purchase){
        var updateParams = req.body;
        return purchase.updateAttributes(updateParams)
      } else {
        throw new Error("No Purchase Found to Update!");
      }
    })
    .then((purchase) => {
      res.send(purchase);
    });;
  }

  deletePurchase(req, res, next) {
    models.Purchase.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((purchase) => {
      res.json(purchase);
    });
  }

  getLastPurchaseByItemId(req, res, next){
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
    .then((purchase) => {
      res.json(purchase);
    });
  }
}
