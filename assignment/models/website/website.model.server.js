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

function createWebsite(userId, website) {
  return WebsiteModel.create(website);
}


// function createWebsiteForUser(userId, website) {
//   var web = null;
//   return WebsiteModel.create(website)
//     .then(function (website) {
//       web = website;
//       UserModel.findUserById(userId)
//         .then(function (user) {
//           user.websites.push(web);
//           // user.websites.push(web.wid);
//           return user.save();
//         });
//     });
// }

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({ developerId: userId})
    .populate('developerId','username')
    .exec();
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({ wid: websiteId }, website);
}

// / function deleteWebsite(websiteId) {
//   return WebsiteModel.remove({ websiteId: websiteId });
// }
function deleteWebsite(websiteId) {
  var developerId = null;
  return WebsiteModel.findWebsiteById(websiteId)
    .then(function(website) {
      developerId = website.developerId;
      return  WebsiteModel.remove({_id: website._id})
        .then(function() {
          return UserModel.update(
            {_id: developerId},
            {$pull: {websites: websiteId}});
        });
    });
}
