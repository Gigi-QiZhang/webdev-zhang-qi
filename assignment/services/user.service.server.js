
module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:uid", findUserById);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);


  // app.get("/api/test", testapi);
  // function testapi(req, res){
  //   console.log("I was called from client");
  //   res.send({message  : "HELLO"})
  // }

  var users = [
    { uid: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice.w@gmail.com" },
    { uid: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob.m@gmail.com" },
    { uid: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly.g@gmail.com" },
    { uid: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose.a@gmail.com" }
  ];

  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user) {
        res.json(user);
      });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password) {
      var promise = userModel.findUserByCredentials(username,password);
      promise.then(function(user){
        res.json(user);

      });
      return;
    } else if(username) {
      userModel.findUserByUsername(username)
        .then(function(user){
          res.json(user);
        });
      return;
    }
    res.json(users);
  }


  function findUserByCredentials(req, res){
    const username = req.query["username"];
    const password = req.query["password"];
    userModel
      .findUserByCredentials(username, password)
      .then(function (user) {
        res.send(user);
      }, function (error){
        res.statusCode(404).send(error);
      });
  }

  function findUserByUsername(req, res){
    const username = req.query["username"];
    userModel
      .findUserByUsername(username)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserById(req, res) {
    var userId = req.params["uid"];
    userModel
      .findUserById(userId)
      .then(function(user) {
        res.json(user);
      });
  }

  // function updateUser(req, res) {
  //   var userId = req.params['uid'];
  //   var newUser = req.body;
  //   userModel
  //     .updateUser(userId, newUser)
  //     .then(function (status) {
  //       res.send(status);
  //     });
  // }
  function updateUser(req, res) {
    var userId = req.params['uid'];
    var newUser = req.body;
    userModel
      .updateUser(userId, newUser)
      .then(function (user) {
        res.json(user);
      });
  }


  function deleteUser(req, res) {
    var userId = req.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function () {
        res.json(null);
      });
  }


};



