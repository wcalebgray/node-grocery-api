import express from 'express';
import UserHandler from '../handlers/user.handler';
var userHandler = new UserHandler();
var router = express.Router();

/* GET users listing. */
router.get('/', userHandler.getAllUsers);
router.post('/', userHandler.createUser);
router.get('/:id', userHandler.getUserById);
router.put('/:id', userHandler.updateUser);
router.delete('/:id', userHandler.deleteUser);

export default router;
