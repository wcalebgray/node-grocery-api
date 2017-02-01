var express = require('express');
var models = require('../models/index');
var storeHandler = require('../handlers/store.handler');
var router = express.Router();

/* GET stores listing. */
router.get('/', storeHandler.getAllStores);
router.post('/', storeHandler.createStore);
router.get('/:id', storeHandler.getStoreById);
router.put('/:id', storeHandler.updateStore);
router.delete('/:id', storeHandler.deleteStore);

module.exports = router;
