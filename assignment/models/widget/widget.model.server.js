var mongoose = require("mongoose");

var WidgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

var PageSchema = require('../page/page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

WidgetModel.createWidget= createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateImage = updateImage;


module.exports = WidgetModel;


// function createWidget(pageId, widget) {
//
//   widget._page = pageId;
//   console.log(widget);
//   return WidgetModel.create(widget);
//  var newPage = null;
//   return WidgetModel
//     .create(widget)
//     .then(function(widget){
//       var newWidget = widget;
//       return PageModel
//         .findPageById(newWidget._page)
//         .then(function(page){
//           page.widgets.push(newWidget._id);
//         console.log(newWidget);
//           return newWidget;
//         });
//     });
// }
function createWidget(pageId, widget)  {
  widget._page = pageId;
  return WidgetModel.create(widget);
}


function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({ _page: pageId });
}


function findWidgetById(widgetId) {
  return WidgetModel.findById({_id: widgetId});
}

// function updateWidget(widgetId, widget) {
//   return WidgetModel.update({ _id: widgetId}, widget);
// }
function updateWidget(widgetId, widget) {
  delete widget._id;
  return WidgetModel
    .update({_id: widgetId},{
      $set : widget
    })
}

function updateImage(widgetId, image) {
  delete image._id;
  return WidgetModel.update({_id: widgetId},{
    $set: image
  });
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({ _id: widgetId});
}


