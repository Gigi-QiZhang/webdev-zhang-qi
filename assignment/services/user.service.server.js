

module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
 // var bcrypt = require("bcrypt-nodejs");

  // app.use(passport.initialize());
  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);



  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  // app.get("/api/user", findUserByUsername);
  // app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:uid", findUserById);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);



  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/register', register);
  app.post('/api/logout', logout);
  app.post ('/api/loggedIn', loggedIn);





  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }


  function register(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        req.login(user, function (err) {
          res.json(user);
        });
      });
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send(null);
    }
  }

  function logout(req, res) {
    req.logout();
    res.send(200);
  }

  function login(req, res) {
    res.json(req.user);
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }



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




