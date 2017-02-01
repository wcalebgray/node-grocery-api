var express = require('express');
var models = require('../models/index');
var itemNameHandler = require('../handlers/itemname.handler');
var router = express.Router();

/* GET itemNames listing. */
router.get('/', itemNameHandler.getAllItemNames);
router.post('/', itemNameHandler.createItemName);
router.get('/:id', itemNameHandler.getItemNameById);
router.put('/:id', itemNameHandler.updateItemName);
router.delete('/:id', itemNameHandler.deleteItemName);

module.exports = router;
