
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Website } from '../models/website.model.client';

@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }
  //
  // api = {
  //   'createWebsite': this.createWebsite,
  //   'findWebsitesByUser': this.findWebsitesByUser,
  //   'findWebsiteById': this.findWebsiteById,
  //   'updateWebsite': this.updateWebsite,
  //   'deleteWebsite': this.deleteWebsite
  // };

  createWebsite(userId: String, website: Website) {
    // user.uid = (Math.random()).toString();
    const url =  this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
          return response.json();
        });
  }



  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId: String, editedWebsite: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, editedWebsite)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}

