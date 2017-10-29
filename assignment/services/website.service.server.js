module.exports = function (app) {
  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.get('/api/website', findAllWebsites);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);


  var websites = [
    { wid: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    { wid: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    { wid: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    { wid: "890", name: "GO", developerId: "123", description: "Lorem"},
    { wid: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    { wid: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    { wid: "789", name: "Chess", developerId: "234", description: "Lorem"}
  ];

  function createWebsite(req, res) {
    var userId = req.params["uid"];
    var website = req.body;
    website.developerId = userId;
    websites.push(website);
    res.json(website);
  }

  // function newWebId () {
  //   return Math.random().toString();
  // }

  function findWebsiteById(req, res) {
    var websiteId = req.params["wid"];
    var website = websites.find(function (website) {
      return website.wid === websiteId;
    });
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params["uid"];
    var allWebsites = [];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        allWebsites.push(websites[i]);
      }
    }
    res.json(allWebsites);
  }

  function findAllWebsites(req, res){
    res.json(websites);
  }

  function updateWebsite(req, res) {
    var websiteId = req.params["wid"];
    var updatedWeb = req.body;
    for (var i = 0; i < websites.length; i++){
      if (websites[i].wid === websiteId){
        websites[i] = updatedWeb;
        break;
      }
    }
    res.json(websites);
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params["wid"];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].wid === websiteId) {
        websites.splice(i, 1);
      }
    }
    // var website = getWebsiteByIdOnly(websiteId);
    // var index = websites.indexOf(website);
    // websites.splice(index, 1);
    res.json(websites);
  }


  function getWebsiteByIdOnly(websiteId) {
    return websites.find(function (website) {
      return website.wid === websiteId;
    });
  }
};


