var models = require('../models/index');

var UserHandler = {
  getAllUsers: function(req, res, next) {
    models.User.find()
    .then(function(users) {
      res.json(users);
    });
  },

  createUser: function(req, res, next) {
    models.User.create({
      name: req.body.name,
      email: req.body.email
    }).then(function(user) {
      res.json(user);
    });
  },

  getUserById: function(req, res, next) {
    models.User.find({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  },

  updateUser: function(req, res, next) {
    models.User.find({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      if(user){
        var updateParams = {};

        if(req.body.name){
          updateParams.name = req.body.name;
        }

        if(req.body.email){
          updateParams.email = req.body.email;
        }

        user.updateAttributes(updateParams)
        .then(function(user) {
          res.send(user);
        });
      }
    });
  },

  deleteUser: function(req, res, next) {
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  },



};

module.exports = UserHandler;
