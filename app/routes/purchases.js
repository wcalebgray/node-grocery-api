import express from 'express';
import PurchaseHandler from '../handlers/purchase.handler';
var purchaseHandler = new PurchaseHandler();
var router = express.Router();

/* GET purchases listing. */
router.get('/', purchaseHandler.getAllPurchases);
router.get('/start/:startTime/end/:endTime', purchaseHandler.getAllPurchasesByDate);
router.post('/', purchaseHandler.createPurchase);
router.get('/:id', purchaseHandler.getPurchaseById);
router.put('/:id', purchaseHandler.updatePurchase);
router.delete('/:id', purchaseHandler.deletePurchase);
router.get('/item/:id', purchaseHandler.getLastPurchaseByItemId);

export default router
