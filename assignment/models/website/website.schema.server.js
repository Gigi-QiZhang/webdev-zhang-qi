var mongoose = require('mongoose');
var WebsiteSchema = mongoose.Schema ({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  // visitCount: Number,
  dateCreated: {type: Date, default: Date.now}
}, { collection: 'website'});


module.exports = WebsiteSchema;
