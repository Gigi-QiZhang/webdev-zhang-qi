import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'Post 3', '456', 'Lorem'),
  ];

  // createPage(websiteId: String, page: any) {
  //   if (this.pages.websiteId = websiteId) {
  //     this.pages.push(page);
  //     return page;
  //   }
  // }
  findPageByWebsiteId(websiteId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].wid === websiteId) {
        return this.pages[x];
      }
    }
  }

  findPagesByWebsiteId(websiteId: string) {
    const pgs = this.pages;
    for (let x = 0; x < this.pages.length; x++) {
      pgs.pop();
    }
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].wid === websiteId) {
        pgs.push(this.pages[x]);
      }
    }
    return pgs;
  }

  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].pid === pageId) {
        return this.pages[x];
      }
    }
  }

  updateWebsite(pageId: string, page: Page) {
    for (let x = 0; x < this.pages.length; x++) {
      const _page = this.pages[x];
      if (_page.pid === pageId) {
        this.pages[x] = page;
      }
    }
  }
  deleteWebsite(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].pid === pageId) {
        // return delete this.websites[x];
        this.pages.splice(x, 1);
      }
    }
  }
}




