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

function createPage(page) {
  var newPage = null;
  return PageModel.create(page)
    .then(function (page) {
      newPage = page;
      // console.log(newPage);
      return WebsiteModel
        .findWebsiteById(newPage._websiteId)
        .then(function (website) {
          website.pages.push(newPage);
          return website();
          // console.log(website);
        });
    });
}


function findAllPagesForWebsite(websiteId) {
  return PageModel.find({ _websiteId: websiteId });
}


function findPageById(pageId) {
  return PageModel.findById({ _id:pageId });
}

function updatePage(pageId, page) {
  return PageModel.update({ _id: pageId }, page);
}

// function updatePage(pageId, page) {
//   // delete page._id;
//   return PageModel
//     .update({_id: pageId}, {
//         $set: {
//           name: page.name,
//           description: page.description
//         }
//       }
//     );
// }


function deletePage(pageId) {
  return PageModel.remove({ _id: pageId });
}


