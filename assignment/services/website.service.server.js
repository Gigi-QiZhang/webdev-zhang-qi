module.exports = function (app) {
  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  // app.get('/api/website', findAllWebsites);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);


  var websiteModel = require('../models/website/website.model.server');

  function createWebsite(req, res) {
    var userId = req.params["uid"];
    var newWeb = req.body;
    // delete newWeb.wid;
    newWeb.developerId = userId;
    websiteModel
      .createWebsite(newWeb)
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
      .then(function (stats) {
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
      });
  }

};


