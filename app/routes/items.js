import express from 'express';
import ItemHandler from '../handlers/item.handler';
var itemHandler = new ItemHandler();
var router = express.Router();

/* GET items listing. */
router.get('/', itemHandler.getAllItems);
router.post('/', itemHandler.createItem);
router.get('/:id', itemHandler.getItemById);
router.put('/:id', itemHandler.updateItem);
router.delete('/:id', itemHandler.deleteItem);
router.get('/store/:id', itemHandler.getItemsByStoreId)

export default router
