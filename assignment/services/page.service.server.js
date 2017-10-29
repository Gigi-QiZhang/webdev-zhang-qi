module.exports = function (app) {
  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  api = {
    'createPage': this.createPage,
    'findAllPagesForWebsiteId': this.findAllPagesForWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };


  var pages = [
    { pid: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { pid: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { pid: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
  ];

  function createPage(req, res) {
    var page = req.body;
    page.pid = Math.random().toString();
    pages.push(page);
    res.json(page);
  }

  // function nextPageId() {
  //   return (Number(pages[pages.length-1].pid)+1).toString();
  // }

  function findPageById(req, res) {
    var pageId = req.params["pid"];
    var page = pages.find(function (page) {
      return page.pid === pageId;
    });
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params["wid"];
    var allPages = [];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].wid === websiteId) {
        allPages.push(pages[i]);
      }
    }
    res.json(allPages);
  }

  function updatePage(req, res) {
    var pageId = req.params["pid"];
    var updatedPage = req.body;
    for (var i = 0; i < pages.length; i++){
      if (pages[i].pid === pageId){
        pages[i] = updatedPage;
        break;
      }
    }
    res.json(pages);
  }

  function deletePage(req, res) {
    var pageId = req.params["pid"];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].pid === pageId) {
        pages.splice(i, 1);
      }
    }
    res.json(pages);
  }

  // function getPageByIdOnly(pageId) {
  //   return pages.find(function(page) {
  //     return page.pid === pageId;
  //   })
  // }

};
