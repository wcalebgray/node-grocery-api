import express from 'express';
import models from '../models/index';
import itemNameHandler from '../handlers/itemname.handler';
var router = express.Router();

/* GET itemNames listing. */
router.get('/', itemNameHandler.getAllItemNames);
router.post('/', itemNameHandler.createItemName);
router.get('/:id', itemNameHandler.getItemNameById);
router.put('/:id', itemNameHandler.updateItemName);
router.delete('/:id', itemNameHandler.deleteItemName);

export { router as itemNameRoutes }
