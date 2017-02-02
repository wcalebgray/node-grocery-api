import express from 'express';
import models from '../models/index';
import userHandler from '../handlers/user.handler';
var router = express.Router();

/* GET users listing. */
router.get('/', userHandler.getAllUsers);
router.post('/', userHandler.createUser);
router.get('/:id', userHandler.getUserById);
router.put('/:id', userHandler.updateUser);
router.delete('/:id', userHandler.deleteUser);

export { router as userRoutes }
