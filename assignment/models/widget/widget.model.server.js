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



module.exports = WidgetModel;

function createWidget(pageId, widget) {
  var newWidget = null;
  return WidgetModel.create(widget)
    .then(function (widget) {
      // console.log(widget);
      return PageModel.findPageById(pageId)
    }).then(function (page) {
      // console.log(page);
      page.widgets.push(newWidget);
      page.widgets.push(newWidget.pid);
      // console.log(newWidget.pid);
      return page.save();
    }).then(function(page) {
      return newWidget;
    })
}


function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({ pageId: pageId });
    // .populate('pageId','name')
    // .exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({ wgid: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({ wgid: widgetId});
}


