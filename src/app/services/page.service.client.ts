import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// injecting service into module
@Injectable()
export class PageService {
  constructor() { }
  pages = [
    { _id: '321', name: 'Post 1', websiteID: '456', description: 'Alice'},
    { _id: '432', name: 'Post 2', websiteID: '456', description: 'Alice'},
    { _id: '543', name: 'Post 3', websiteID: '456', description: 'Alice'},
  ];
  // api = {
  //   'createPage' : this.createPage,
  //   'findPageByWebsiteId' : this.findPageByWebsiteId,
  //   'findWebsiteById' : this.findWebsiteById,
  //   // 'updateWebsite' : this.updateWebsite,
  //   // 'deleteWebsite' : this.deleteWebsite,
  // };
  // createPage(websiteID: string, page: string) { // createPage(websiteId, page)
  //   this.pages.push(websiteID);
  //   return page;
  // }
  // findPageByWebsiteId(websiteId: string) {
  //   for (let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x]._id === websiteId) { return this.websites[x]; }
  //   }
  // }
  // findPageById(pageId: string) { for (let x = 0; x < this.websites.length; x++) {
  //   if (this.websites[x]._id === pageId) { return this.websites[x]; }
  // } }
  // updatePage(pageId, page) { … }
  // deletePage(pageId) { … }
}

