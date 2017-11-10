// import { Widget } from '../models/widget.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WidgetService {

  baseUrl = environment.baseUrl;
  // 'http://localhost:3100'

  constructor(private http: Http) { }

  // api = {
  //   'createWidget': this.createWidget,
  //   'findAllWidgetsForPageId': this.findAllWidgetsForPageId,
  //   'findWidgetById': this.findWidgetById,
  //   'updateWidget': this.updateWidget,
  //   'deleteWidget': this.deleteWidget
  // };


  createWidget(pageId, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        // console.log(response);
        return response.json();
      });
  }


  findAllWidgetsForPage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  updateWidget(widgetId, editedWidget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, editedWidget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}






