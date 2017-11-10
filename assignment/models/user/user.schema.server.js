var WebsiteSchema = require('../website/website.schema.server');

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  // uid: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
  dateCreated: {type: Date, default: Date.now}
  // dob: Date,
  // salary: Number
}, { collection: 'user'});


module.exports = UserSchema;
