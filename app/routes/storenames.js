import express from 'express';
import models from '../models/index';
import storeNameHandler from '../handlers/storename.handler';
var router = express.Router();

/* GET storeNames listing. */
router.get('/', storeNameHandler.getAllStoreNames);
router.post('/', storeNameHandler.createStoreName);
router.get('/:id', storeNameHandler.getStoreNameById);
router.put('/:id', storeNameHandler.updateStoreName);
router.delete('/:id', storeNameHandler.deleteStoreName);

export { router as storeNameRoutes }
