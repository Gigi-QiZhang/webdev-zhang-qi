import { Website } from '../models/website.model.client';
// import { WEBSITES } from './website.mock.client';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  api = {
    'createWebsite': this.createWebsite,
    'findAllWebsitesForUser': this.findAllWebsitesForUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  createWebsite(userId, website) {
    website.wid = (new Date()).getTime().toString();
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllWebsitesForUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(userId, websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId, newWebsite) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, newWebsite)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}

