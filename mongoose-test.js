// console.log("hello");
//
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/cs5610', { useMongoClient: mongoose });
//
// var UserSchema = mongoose.Schema ({
//   username: String,
//   password: String,
//   firstName: String,
//   lastName: String,
//   dob: Date,
//   salary: Number
// });
//
// var UserModel = mongoose.model("UserModel", UserSchema);
//
// var dan = {
//   username: 'dan',
//   firstName: 'Daniel',
//   lastName: 'Wu'
// };
//
// var wallace = {
//   username: 'wallace',
//   firstName: 'Wallace',
//   lastName: 'Chung'
// };
//
// function createUser(user) {
//   UserModel.create(dan, function(err, doc) {
//     console.log(err);
//     console.log(doc);
//   }); // insert "dan" to database
//
//   function findAllUsers() {
//     UserModel.find(function(err,docs) {
//       console.log(docs);
//     })
//   }
//
// }
//
