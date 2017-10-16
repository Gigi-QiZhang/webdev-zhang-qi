import { Website } from '../models/website.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456'),
    new Website('234', 'Tweeter', '456'),
    new Website('456', 'Gizmodo', '456'),
    new Website('890', 'Go', '123'),
    new Website('567', 'Tic Tac Toe', '123'),
    new Website('678', 'Checkers', '123'),
    new Website('789', 'Chess', '234'),
  ];

  // createWebsite(userId: any, website: any) {
  //   if (this.websites.developerId = userId) {
  //     this.websites.push(website);
  //     return website
  //   }
  // }

  // findWebsiteByUser (userId: any) {
  //   return this.websites.find(function (website) {
  //     return website.developerId === userId;
  //   });
  // }
  //
  // findWebsiteById(websiteId: String) {
  //   return this.websites.find(function (website) {
  //     return website._id === websiteId;
  //   });
  // }
  // findWebsiteByUser(userId) {
  //   for (let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x].developerId === userId ) {
  //       return this.websites[x];
  //     }
  //   }
  // }
  // findWebsitesByUser(userId) {
  //   const sites = this.websites;
  //   for (let x = 0; x < this.websites.length; x++) {
  //     sites.pop();
  //   }
  //   for (let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x].developerId === userId ) {
  //       sites.push(this.websites[x]);
  //     }
  //   }
  //   return sites;
  // }


  // updateWebsite(websiteId: any, website: String) {
  //   for (let i = 0; i < this.websites.length; i++) {
  //     const _website = this.websites[i];
  //     if (_website._id === websiteId) {
  //       this.websites[i].name = _website.name;
  //       this.websites[i].description = _website.description;
  //     }
  //   }
  // }
  // deleteWebsite(websiteId: string) {
  //   for (let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x]._id === websiteId) {
  //       return delete this.websites[x];
  //     }
  //   }
  // }
}




