
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
    new Widget('789', 'HTML', '321')
    // new Widget('123', 'HEADING', '321', 2, 'GIZMODO'),
    // new Widget('234', 'HEADING', '321', 4, 'Lorem ipsum'),
    // new Widget('345', 'IMAGE', '321', '100%', 'http://lorempixel.com/400/200/'),
    // new Widget('456', 'HTML', '321', '<p>Lorem ipsum</p>'),
    // new Widget('567', 'HEADING', '321', 4 , 'Lorem ipsum'),
    // new Widget('678', 'YOUTUBE', '321', '100%', 'https://youtu.be/AM2Ivdi9c4E'),
    // new Widget('789', 'HTML', '321', '<p>Lorem ipsum</p>'),
  ];
  //
  // createWidget(pageId: String, widget: any) {
  //   if (this.pages.websiteId = websiteId) {
  //     this.pages.push(page);
  //     return page;
  //   }
  // }
  //
  findWidgetByPageId (pageId: String) {
      for (let x = 0; x < this.widgets.length; x++) {
        if (this.widgets[x].pid === pageId) {
          return this.widgets[x];
        }
      }
    }

  findWidgetsByPageId (pageId: String) {
    const wgts = this.widgets;
    for (let x = 0; x < this.widgets.length; x++) {
      wgts.pop();
    }
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pid === pageId) {
        wgts.push(this.widgets[x]);
      }
    }
    return wgts;
  }


  findWidgetById(widgetId: String) {
      for (let x = 0; x < this.widgets.length; x++) {
        if (this.widgets[x].pid === widgetId) {
          return this.widgets[x];
        }
      }
    }
  updateWidget(widgetId: String, widget: Widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      const _widget = this.widgets[x];
      if (_widget.pid === widgetId) {
        this.widgets[x] = _widget;
      }
    }
  }

  deleteWidget(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pid === widgetId) {
        // return delete this.widgets[x];
        this.widgets.splice(x, 1);
      }
    }
  }
}




