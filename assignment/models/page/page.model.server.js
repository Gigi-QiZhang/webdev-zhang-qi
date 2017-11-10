var mongoose = require('mongoose');
var PageSchema = require("./page.schema.server");
var PageModel = mongoose.model("PageModel", PageSchema);

var WebsiteSchema = require('../website/website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);


PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;


module.exports = PageModel;

function createPage(websiteId, page) {
  // var newPage = null;
  return PageModel.create(page)
    .then(function (page) {
      var newPage = page;
      WebsiteModel.findWebsiteById(websiteId)
        .then(function (website) {
          website.pages.push(newPage);
          website.pages.push(newPage.pid);
          return website.save();
        });
    });
}


function findAllPagesForWebsite(websiteId) {
  return PageModel.find({ websiteId: websiteId });
  // .populate('websiteId','name')
  // .exec();
}


function findPageById(pageId) {
  return PageModel.findById({pageId});
}

// function findPageById(pageId) {
//   return PageModel.findOne({pid: pageId});
// }

function updatePage(pageId, page) {
  return PageModel.update({ pid: pageId }, page);
}

function deletePage(pageId) {
  return PageModel.remove({ pid: pageId });
}


