import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page('123', 'Facebook', '456'),
    new Page('234', 'Tweeter', '456'),
    new Page('456', 'Gizmodo', '456'),
    new Page('890', 'Go', '123'),
    new Page('567', 'Tic Tac Toe', '123'),
    new Page('678', 'Checkers', '123'),
    new Page('789', 'Chess', '234'),
  ];

  // createPage(websiteId: String, page: any) {
  //   if (this.pages.websiteId = websiteId) {
  //     this.pages.push(page);
  //     return page;
  //   }
  // }

  // findPageByWebsiteId (websiteId: any) {
  //   return this.pages.find(function (page) {
  //     return page.websiteId === websiteId;
  //   });
  // }
  //
  // findPageById(pageId: any) {
  //   return this.pages.find(function (page) {
  //     return page._id === pageId;
  //   });
  // }
  // updatePage(pageId: any, page: String) {
  //   for (let i = 0; i < this.pages.length; i++) {
  //     const _page = this.pages[i];
  //     if (_page._id === pageId) {
  //       this.pages[i].name = _page.name;
  //       this.pages[i].description = _page.description;
  //     }
  //   }
  // }
  // deletePage(pageId: string) {
  //   for (let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x]._id === pageId) {
  //       return delete this.pages[x];
  //     }
  //   }
  // }
}




