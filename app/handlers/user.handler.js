import models from '../models/index';

export default class UserHandler {
  getAllUsers(req, res, next) {
    models.User.findAll()
    .then((users) => {
      res.json(users);
    });
  }

  createUser(req, res, next) {
    models.User.create({
      name: req.body.name,
      email: req.body.email
    })
    .then((user) => {
      res.json(user);
    });
  }

  getUserById(req, res, next) {
    models.User.find({
      where: {
        id: req.params.id
      }
    })
    .then((user) => {
      res.json(user);
    });
  }

  updateUser(req, res, next) {
    models.User.find({
      where: {
        id: req.params.id
      }
    })
    .then((user) => {
      if(user){
        var updateParams = req.body;
        return user.updateAttributes(updateParams)
      }
    })
    .then((user) => {
      res.send(user);
    });
  }

  deleteUser(req, res, next) {
    models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((user) => {
      res.json(user);
    });
  }
}
