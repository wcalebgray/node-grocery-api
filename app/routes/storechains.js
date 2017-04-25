import express from 'express';
import StoreChainHandler from '../handlers/storechain.handler';
var storeChainHandler = new StoreChainHandler();
var router = express.Router();

/* GET StoreChains listing. */
router.get('/', storeChainHandler.getAllStoreChains);
router.post('/', storeChainHandler.createStoreChain);
router.get('/:id', storeChainHandler.getStoreChainById);
router.put('/:id', storeChainHandler.updateStoreChain);
router.delete('/:id', storeChainHandler.deleteStoreChain);

export default router
