module.exports = function (app) {
  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  // app.get('/api/website', findAllWebsites);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);

  var websiteModel = require('../models/website/website.model.server');

  // var websites = [
  //   {wid: "123", name: "Facebook", developerId: "456", description: "Lorem"},
  //   {wid: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
  //   {wid: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
  //   {wid: "890", name: "GO", developerId: "123", description: "Lorem"},
  //   {wid: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
  //   {wid: "678", name: "Checkers", developerId: "123", description: "Lorem"},
  //   {wid: "789", name: "Chess", developerId: "234", description: "Lorem"}
  // ];

  function createWebsite(req, res) {
    var userId = req.params["uid"];
    var newWeb = req.body;
    newWeb.developerId = userId;
    delete newWeb._id;
    websiteModel
      .createWebsite(userId, newWeb)
      .then(function (website) {
        res.json(website);
      }, function(err) {
        console.log(err);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params["uid"];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findWebsiteById(req, res) {
    var webId = req.params["wid"];
    websiteModel
      .findWebsiteById(webId)
      .then(function(website) {
        // console.log('id:(test)' + website);
        res.json(website);
      });
  }

  function updateWebsite(req, res) {
    var webId = req.params['wid'];
    var newWeb = req.body;
    websiteModel
      .updateWebsite(webId, newWeb)
      .then(function (status) {
        res.send(status);
      });
  }

  function deleteWebsite(req, res) {
    var webId = req.params['wid'];
    websiteModel
      .deleteWebsite(webId)
      .then(function () {
        res.json(null);
      });
  }
  // function deleteWebsite(req, res) {
  //   var webId = req.params['wid'];
  //   websiteModel
  //     .deleteWebsite(webId)
  //     .then(function (status) {
  //       res.send(status);
  //     });
  // }

};


