module.exports = function (app) {
  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  var PageModel = require('../models/page/page.model.server');

  // api = {
  //   'createPage': this.createPage,
  //   'findAllPagesForWebsiteId': this.findAllPagesForWebsiteId,
  //   'findPageById': this.findPageById,
  //   'updatePage': this.updatePage,
  //   'deletePage': this.deletePage
  // };


  var pages = [
    { pid: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { pid: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { pid: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
  ];

  function createPage(req, res) {
    var websiteId = req.params["wid"];
    var newPage = req.body;
    newPage.websiteId = websiteId;
    // delete newPage._id;
    PageModel
      .createPage(websiteId, newPage)
      .then(function (page) {
        res.json(page);
      }, function(err) {
        console.log(err);
      });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params["wid"];
    PageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params["pid"];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      })
  }


  function updatePage(req, res) {
    var pageId = req.params["pid"];
    var updatedPage = req.body;
    PageModel.updatePage(pageId, updatedPage)
      .then(function() {
        res.json(null);
      });
  }

  function deletePage(req, res) {
    var pageId = req.params["pid"];
    PageModel.deletePage(pageId)
      .then(function() {
        res.json(null);
      });
  }
};
