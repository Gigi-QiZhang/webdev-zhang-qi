
module.exports = function (app) {
  var widgetModel = require('../models/widget/widget.model.server');
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/public/uploads' });


  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.put("/api/page/:pid/widget",reorderWidgets);
  app.post ("/api/upload", upload.single( 'myFile' ), uploadImage );


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
    var newWidget = req.body;
    // console.log(newWidget);

    widgetModel.createWidget(pageId, newWidget)
      .then(function(widget) {
        // console.log(widget);
        res.json(widget);
      }, function (err){
        res.sendStatus(400).send(err);
      });
  }
  // function createWidget(req, res) {
  //   var pageId = req.params['pid'];
  //   // var widgetId = newId();
  //   var widget = req.body;
  //
  //   delete widget._id;
  //   widget._page = pageId;
  //   widget.type = widget.widgetType;
  //
  //   return widgetModel
  //     .createWidget(widget)
  //     .then(function (widget){
  //       return res.json(widget);
  //     });
  // }
  //

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pid"];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        res.json(widgets);
        },
        function (err) {
          res.sendStatus(404).send(err);
      });
  }


  function findWidgetById(req, res) {
    var widgetId = req.params["wgid"];
    widgetModel.findWidgetById(widgetId)
      // .then(function (widget) {
      //   res.json(widget);
      // });
      .then(function (widget) {
          res.json(widget);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }


  function updateWidget(req, res) {
    var widgetId = req.params["wgid"];
    var updatedWidget = req.body;
    widgetModel.updateWidget(widgetId, updatedWidget)
      // .then(function () {
      //   res.json(null);
      // });
      .then(function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }


  function deleteWidget(req, res) {
    var widgetId = req.params["wgid"];
    // var pageId = req.query.pid;
    widgetModel.deleteWidget(widgetId)
      .then (function (stats) {
          // console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
      // .then(function () {
      //   res.json(null);
      // });
  }

  function reorderWidgets(req,res) {
    var pageId = req.params["pid"];
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.send(200);

      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }

};
