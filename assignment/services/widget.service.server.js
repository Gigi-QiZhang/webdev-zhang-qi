
module.exports = function (app) {
  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);


  api = {
    'createWidget': this.createWidget,
    'findAllWidgetsForPageId': this.findAllWidgetsForPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

    var widgets = [
      { wgid: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
      { wgid: '234', widgetType: 'HEADING', pageId: '321', size: 4, 'text': 'Lorem ipsum'},
      { wgid: '345', widgetType: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/'},
      { wgid: '456', widgetType: 'HTML', pageId: '321', 'text': '<p>Lorem ipsum</p>'},
      { wgid: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
      { wgid: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E' },
      { wgid: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
    ];

  function createWidget(req, res) {
    var widget = req.body;
    widget.wgid = Math.random().toString();
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pid"];
    const allWidgets = [];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pid) {
        results.push(widgets[i]);
      }
    }
    res.json(allWidgets);
  }


  function findWidgetById(req, res) {
    var widgetId = req.params["wgid"];
    var widget = widgets.find(function (widget) {
      return widget.wgid === widgetId;
    });
    res.json(widget);
  }


  function updateWidget(req, res) {
    var widgetId = req.params["wgid"];
    var updatedWidget = req.body;
    for (var i = 0; i < widgets.length; i++){
      if (widgets[i].wgid === widgetId){
        widgets[i] = updatedWidget;
        break;
      }
    }
    res.json(widgets);

  }


  function deleteWidget(req, res) {
    var widgetId = req.params["wgid"];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].wgid === widgetId) {
        widgets.splice(i, 1);
      }
    }
    res.json(widgets);
  }
};
