import express from 'express';
import models from '../models/index';
import storeHandler from '../handlers/store.handler';
var router = express.Router();

/* GET stores listing. */
router.get('/', storeHandler.getAllStores);
router.post('/', storeHandler.createStore);
router.get('/:id', storeHandler.getStoreById);
router.put('/:id', storeHandler.updateStore);
router.delete('/:id', storeHandler.deleteStore);

export { router as storeRoutes }
