var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema ({
  widgetType: {type: String, enum: ['Header','Image','YouTube','HTML','Text']},
  _page: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date.now}
}, { collection: 'widget'});


module.exports = WidgetSchema;


