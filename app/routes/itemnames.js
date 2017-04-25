import express from 'express';
import ItemNameHandler from '../handlers/itemname.handler';
var itemNameHandler = new ItemNameHandler();
var router = express.Router();

/* GET itemNames listing. */
router.get('/', itemNameHandler.getAllItemNames);
router.post('/', itemNameHandler.createItemName);
router.get('/:id', itemNameHandler.getItemNameById);
router.put('/:id', itemNameHandler.updateItemName);
router.delete('/:id', itemNameHandler.deleteItemName);

export default router
