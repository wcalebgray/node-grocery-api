import express from 'express';
import models from '../models/index';
import itemHandler from '../handlers/item.handler';
var router = express.Router();

/* GET items listing. */
router.get('/', itemHandler.getAllItems);
router.post('/', itemHandler.createItem);
router.get('/:id', itemHandler.getItemById);
router.put('/:id', itemHandler.updateItem);
router.delete('/:id', itemHandler.deleteItem);
router.get('/store/:id', itemHandler.getItemsByStoreId)

export { router as itemRoutes }
