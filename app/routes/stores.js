import express from 'express';
import StoreHandler from '../handlers/store.handler';
var storeHandler = new StoreHandler();
var router = express.Router();

/* GET stores listing. */
router.get('/', storeHandler.getAllStores);
router.post('/', storeHandler.createStore);
router.get('/:id', storeHandler.getStoreById);
router.put('/:id', storeHandler.updateStore);
router.delete('/:id', storeHandler.deleteStore);

export default router
