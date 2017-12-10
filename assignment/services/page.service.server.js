module.exports = function (app) {
  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  var PageModel = require('../models/page/page.model.server');

  function createPage(req, res) {
    var websiteId = req.params["wid"];
    var newPage = req.body;
    newPage._websiteId = websiteId;
    PageModel
      .createPage(newPage)
      .then(function (page) {
        PageModel
          .res.json(page);
      }, function (err) {
        console.log(err);
      });
  }
  // function createWebsite(req, res) {
  //   var userId = req.params["uid"];
  //   var newWeb = req.body;
  //   newWeb.developerId = userId;
  //   // delete newWeb._id;
  //   websiteModel
  //     .createWebsite(userId, newWeb)
  //     .then(function (website) {
  //       res.json(website);
  //     }, function(err) {
  //       console.log(err);
  //     });
  // }


  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['wid'];
    return PageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params['pid'];
    return PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      })
  }

  function updatePage(req, res) {
    var pageId = req.params['pid'];
    console.log(pageId);
    var page = req.body;
    console.log(page);
    return PageModel
      .updatePage(pageId, page)
      .then(function (stats) {
         console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function deletePage(req,res) {
    var pageId = req.params['pid'];
    PageModel
      .deletePage(pageId)
      .then (function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }


};
