import { Website } from '../models/website.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'description'),
    new Website('234', 'Tweeter', '456', 'description'),
    new Website('456', 'Gizmodo', '456', 'description'),
    new Website('890', 'Go', '123', 'description'),
    new Website('567', 'Tic Tac Toe', '123', 'description'),
    new Website('678', 'Checkers', '123', 'description'),
    new Website('789', 'Chess', '234', 'description'),
  ];

  // createWebsite(userId: any, website: any) {
  //   if (this.websites.developerId = userId) {
  //     this.websites.push(website);
  //     return website;
  //   }
  // }

  findWebsiteByUser(userId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId ) {
        return this.websites[x];
      }
    }
  }
  findWebsitesByUser(userId) {
    const webs = this.websites;
    for (let x = 0; x < this.websites.length; x++) {
      webs.pop();
    }
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        webs.push(this.websites[x]);
      }
    }
      return webs;
  }

  updateWebsite(websiteId: string, website: Website) {
    for (let x = 0; x < this.websites.length; x++) {
      const _website = this.websites[x];
      if (_website.wid === websiteId) {
        this.websites[x] = website;
      }
    }
  }
  deleteWebsite(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].wid === websiteId) {
        // return delete this.websites[x];
        this.websites.splice(x, 1);
      }
    }
  }
}


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






