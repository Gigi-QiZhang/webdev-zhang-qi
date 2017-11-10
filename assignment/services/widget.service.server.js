
module.exports = function (app) {
  var widgetModel = require('../models/widget/widget.model.server');
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/public/uploads' });


  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.post ("/api/upload", upload.single( 'myFile' ), uploadImage );


  // var widgets = [
  //   { wgid: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
  //   { wgid: '234', widgetType: 'HEADING', pageId: '321', size: 4, 'text': 'Lorem ipsum'},
  //   { wgid: '345', widgetType: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/'},
  //   { wgid: '456', widgetType: 'HTML', pageId: '321', 'text': '<p>Lorem ipsum</p>'},
  //   { wgid: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
  //   { wgid: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E' },
  //   { wgid: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  // ];

  function uploadImage(req, res) {

    var widgetId = req.body.wgid;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.uid;
    var websiteId = req.body.wid;
    var pageId = req.body.pid;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = widgetModel.findWidgetById(widgetId);
    widget.url = '/assets/uploads/'+filename;
    widgetModel.updateWidget(widgetId, widget)
      .then(function () {
        res.json(null);
      });

    var callbackUrl = req.headers.origin + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    res.redirect(callbackUrl);
  }


  function createWidget(req, res) {
    var pageId = req.params["pid"];
    // console.log(pageId);
    var newWidget = req.body;
    // console.log(newWidget);
    widgetModel.createWidget(pageId, newWidget)
      .then(function(widget) {
        // console.log(widget);
        res.json(widget);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pid"];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        res.json(widgets);
      });
  }


  function findWidgetById(req, res) {
    var widgetId = req.params["wgid"];
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }


  function updateWidget(req, res) {
    var widgetId = req.params["wgid"];
    var updatedWidget = req.body;
    widgetModel.updateWidget(widgetId, updatedWidget)
      .then(function () {
        res.json(null);
      });
  }


  function deleteWidget(req, res) {
    var widgetId = req.params["wgid"];
    widgetModel.deleteWidget(widgetId)
      .then(function () {
        res.json(null);
      });
  }

};
