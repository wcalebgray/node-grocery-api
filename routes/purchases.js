var express = require('express');
var models = require('../models/index');
var purchaseHandler = require('../handlers/purchase.handler');
var router = express.Router();

/* GET purchases listing. */
router.get('/', purchaseHandler.getAllPurchases);
router.get('/start/:startTime/end/:endTime', purchaseHandler.getAllPurchasesByDate);
router.post('/', purchaseHandler.createPurchase);
router.get('/:id', purchaseHandler.getPurchaseById);
router.put('/:id', purchaseHandler.updatePurchase);
router.delete('/:id', purchaseHandler.deletePurchase);
router.get('/item/:id', purchaseHandler.getLastPurchaseByItemId);

module.exports = router;
