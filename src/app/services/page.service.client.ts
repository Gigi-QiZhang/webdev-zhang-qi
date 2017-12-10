import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  createPage(websiteId, page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }


  findAllPagesForWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  findPageById(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  updatePage(pageId, editedPage) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, editedPage)
      .map((response: Response) => {
        return response;
      });
  }

  deletePage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response;
      });
  }
}




