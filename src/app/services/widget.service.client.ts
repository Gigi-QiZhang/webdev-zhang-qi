import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// injecting service into module
@Injectable()
export class WidgetService {
  constructor() {
  }

  widgets = [
    {_id: '321', widgetType: 'HEADING', pageID: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageID: '321', size: 4, text: 'GIZMODO'},
    {_id: '345', widgetType: 'IMAGE', pageID: '321', width: '100%', url: 'http://lorempixel.com/400/200/'},
    {_id: '456', widgetType: 'HTML', pageID: '456', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADING', pageID: '321', size: 4, text: 'Lorem ipsum'},
    {_id: '678', widgetType: 'YOUTUBE', pageID: '321', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E'},
    {_id: '789', widgetType: 'HTML', pageID: '321', text: '<p>Lorem ipsum</p>'}
  ];
}
//   api = {
//     'createWidget' : this.createWidget,
//     'findWidgetsByPageId' : this.findWidgetsByPageId,
//     'findWidgetById' : this.findWidgetById,
//     'updateWidget' : this.updateWidget,
//     'deleteWidget' : this.deleteWidget,
//   };
//   createWidget(widget: any) { // createWidget(pageId, widget)
//     widget._id = Math.random();
//     this.widgets.push(widget);
//     return widget;
//   }
//   findWidgetsByPageId(pageID: string) {
//     for (let x = 0; x < this.widgets.length; x++) {
//       if (this.widgets[x]._id === pageID) { return this.widgets[x]; }
//     }
//   }
//   findWidgetById(widgetID: string) { for (let x = 0; x < this.widgets.length; x++) {
//     if (this.widgets[x]._id === widgetID) { return this.widgets[x]; }
//   } }
//   updateWidget(widgetID, widget) { … }
//   deleteWidget(widgetID) { … }
// }
//
