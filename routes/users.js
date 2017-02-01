var express = require('express');
var models = require('../models/index');
var userHandler = require('../handlers/user.handler');
var router = express.Router();

/* GET users listing. */
router.get('/', userHandler.getAllUsers);
router.post('/', userHandler.createUser);
router.get('/:id', userHandler.getUserById);
router.put('/:id', userHandler.updateUser);
router.delete('/:id', userHandler.deleteUser);

module.exports = router;
