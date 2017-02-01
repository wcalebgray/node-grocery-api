var express = require('express');
var models = require('../models/index');
var itemHandler = require('../handlers/item.handler');
var router = express.Router();

/* GET items listing. */
router.get('/', itemHandler.getAllItems);
router.post('/', itemHandler.createItem);
router.get('/:id', itemHandler.getItemById);
router.put('/:id', itemHandler.updateItem);
router.delete('/:id', itemHandler.deleteItem);
router.get('/store/:id', itemHandler.getItemsByStoreId)

module.exports = router;
