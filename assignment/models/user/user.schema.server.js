var WebsiteSchema = require('../website/website.schema.server');

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  // uid: String,
  username: { type: String, required: true },
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
  dateCreated: {type: Date, default: Date.now},
  facebook: {
    id:    String,
    token: String
  }
}, { collection: 'user'});


module.exports = UserSchema;
