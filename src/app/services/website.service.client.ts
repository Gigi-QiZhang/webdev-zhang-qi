
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

  createWebsite(userId: String, website: Website) {
    const body = {
      name : website.name,
      description : website.description,
      developerId : userId
    };
    const url =  this.baseUrl + '/api/user/' + userId + '/website';
    console.log(website);
    return this.http.post(url, body)
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

  findWebsiteById(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId, editedWebsite) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, editedWebsite)
      .map((response: Response) => {
        return response;
      });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response;
      });
  }
}

