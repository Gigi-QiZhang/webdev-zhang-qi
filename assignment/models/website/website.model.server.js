var mongoose = require('mongoose');
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);


WebsiteModel.createWebsite = createWebsite;
// WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;


module.exports = WebsiteModel;

function createWebsite(website) {
  return WebsiteModel.create(website);
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({ developerId: userId});
    // .populate('developerId','username')
    // .exec();
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  // delete website._id;
  return WebsiteModel.update({ _id: websiteId },  {
    $set: { name : website.name,
      description : website.description
    }
  });
}

function deleteWebsite(websiteId) {
  return WebsiteModel.remove({ _id: websiteId });
}
