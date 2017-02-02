import express from 'express';
import models from '../models/index';
import purchaseHandler from '../handlers/purchase.handler';
var router = express.Router();

/* GET purchases listing. */
router.get('/', purchaseHandler.getAllPurchases);
router.get('/start/:startTime/end/:endTime', purchaseHandler.getAllPurchasesByDate);
router.post('/', purchaseHandler.createPurchase);
router.get('/:id', purchaseHandler.getPurchaseById);
router.put('/:id', purchaseHandler.updatePurchase);
router.delete('/:id', purchaseHandler.deletePurchase);
router.get('/item/:id', purchaseHandler.getLastPurchaseByItemId);

export { router as purchaseRoutes }
