var express = require('express');
var models = require('../models/index');
var storeNameHandler = require('../handlers/storename.handler');
var router = express.Router();

/* GET storeNames listing. */
router.get('/', storeNameHandler.getAllStoreNames);
router.post('/', storeNameHandler.createStoreName);
router.get('/:id', storeNameHandler.getStoreNameById);
router.put('/:id', storeNameHandler.updateStoreName);
router.delete('/:id', storeNameHandler.deleteStoreName);

module.exports = router;
