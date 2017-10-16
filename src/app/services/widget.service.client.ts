
import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.cilent';

@Injectable()
export class WidgetService {
  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321'),
    new Widget('234', 'HEADING', '321'),
    new Widget('345', 'IMAGE', '321'),
    new Widget('456', 'HTML', '321'),
    new Widget('567', 'HEADING', '321'),
    new Widget('678', 'YOUTUBE', '321'),
    new Widget('789', 'HTML', '321'),
  ];
  //
  // createWidget(pageId: String, widget: any) {
  //   if (this.pages.websiteId = websiteId) {
  //     this.pages.push(page);
  //     return page;
  //   }
  // }
  //
  // findWidgetByPageId (pageId: any) {
  //   return this.widgets.find(function (widget) {
  //     return widget.pageId === pageId;
  //   });
  // }
  //
  // findWidgetById(widgetId: any) {
  //   return this.widgets.find(function (widget) {
  //     return widget._id === widgetId;
  //   });
  // }
  // updateWidget(widgetId: any, widget: String) {
  //   for (let i = 0; i < this.widgets.length; i++) {
  //     const _widget = this.widgets[i];
  //     if (_widget._id === widgetId) {
  //       this.widgets[i].widgetType = _widget.widgetType;
  //       this.widgets[i].pageId = _widget.pageId;
  //     }
  //   }
  // }
  // deleteWidget(widgetId: string) {
  //   for (let x = 0; x < this.widgets.length; x++) {
  //     if (this.widgets[x]._id === widgetId) {
  //       return delete this.widgets[x];
  //     }
  //   }
  // }
}




