var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
// UserModel.findAllUsers = findAllUsers;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(uid) {
  return UserModel.findById(uid);
  // return UserModel.findById({ userId: userId });
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({ _id: userId }, user);
  // UserModel.find(username, function(err, doc) {
  //   console.log(err);
  //   console.log(doc);
  // });
}

function deleteUser(userId) {
  return UserModel.remove({ _id: userId });
  // UserModel.find(username, function(err, doc) {
  //   console.log(err);
  //   console.log(doc);
  // });

}

// function findAllUsers(){
//   return UserModel.find({});
// }
//


