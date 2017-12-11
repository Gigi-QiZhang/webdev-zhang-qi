
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

    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    var callbackUrl = "https://webdev-zhang-qi.herokuapp.com/user/website/"
      + websiteId + '/page/' + pageId + '/widget/' ;

    if(myFile === null) {
      res.redirect(callbackUrl);
      return;
    }
    var url = '/assets/uploads/' + filename;

    var image = {
      url: url,
      name: filename
    };

    widgetModel.updateImage(widgetId, image).then(function(status){
        console.log(stats);
        res.send(200);
      },
      function (err) {
        res.sendStatus(404).send(err);
      });
    res.redirect(callbackUrl);
  }


  function createWidget(req, res) {
    var pageId = req.params["pid"];
    var newWidget = req.body;
    widgetModel.createWidget(pageId, newWidget)
      .then(function(widget) {
        // console.log(widget);
        res.json(widget);
      }, function (err){
        res.sendStatus(400).send(err);
      });
  }

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
    widgetModel.deleteWidget(widgetId)
      .then (function (stats) {
          // console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
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
