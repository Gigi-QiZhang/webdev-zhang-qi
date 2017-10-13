// import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Response } from '@angular/http';
// import 'rxjs/Rx';
// import { environment } from '../../environments/environment';
// import { Router } from '@angular/router';
// // injecting service into module
import { Website } from '../model/website.model.client';
// import { WebsiteService } from './services/website.service.client';

export const WEBSITES: Website[] = [
  new Website('321', 'Facebook'),
  new Website('432', 'Twitter'),
  new Website('543', 'Amazon'),
  new Website('654', 'Wikipedia'),
];


// @Injectable()
// export class WebsiteService {
//   constructor() { }
//   websites = [
//     { _id: '123', name: 'Facebook', developerID: '456', description: 'Alice'},
//     { _id: '234', name: 'Google', developerID: '456', description: 'Alice'},
//     { _id: '456', name: 'Airbnb', developerID: '456', description: 'Alice'},
//     { _id: '567', name: 'Yahoo', developerID: '456', description: 'Alice'},
//     { _id: '678', name: 'Microsoft', developerID: '456', description: 'Alice'},
//     { _id: '789', name: 'IBM', developerID: '456', description: 'Alice'},
//     { _id: '890', name: 'Uber', developerID: '456', description: 'Alice'},
//   ];
//   api = {
//     'createWebsite' : this.createWebsite,
//     'findWebsitesByUser' : this.findWebsitesByUser,
//     'findWebsiteById' : this.findWebsiteById,
//     // 'updateWebsite' : this.updateWebsite,
//     // 'deleteWebsite' : this.deleteWebsite,
//   };
//   createWebsite(userId: string, website: any) {
//     // (userId, website)- adds the website parameter instance to the local websites array.
//     // The new website's developerId is set to the userId parameter
//     website._id = Math.random();
//     website.developerID = userId;
//     this.websites.push(website);
//     return website;
//   }
//   findWebsitesByUser(userId: string) {
//     for (let x = 0; x < this.websites.length; x++) {
//       if (this.websites[x]._id === userId) { return this.websites[x]; }
//     }
//   }
//   findWebsiteById(websiteId: string) { for (let x = 0; x < this.websites.length; x++) {
//     if (this.websites[x]._id === websiteId) { return this.websites[x]; }
//   } }
//   // updateWebsite(websiteId: string, websiteId: any) {
//   //   for (let x = 0; x < this.websites.length; x++) {
//   //     if (this.websites[x]._id === websiteId) {
//   //       this.websites.push(websiteId);
//   //       return websiteId;
//   //     }
//   //   }
//   // }
//   // deleteWebsite(userId: string) {
//   //   for (let x = 0; x < this.users.length; x++) {
//   //     if (this.users[x]._id === userId) {
//   //       return delete this.users[x];
//   //     }
//   //   }
//   // }
// }
//
//
// // import { Website } from '../models/website.model.client';
// //
// // export const WEBSITES: Website[] = [
// //   new Website('321', 'Facebook'),
// //   new Website('432', 'Twitter'),
// //   new Website('543', 'Amazon'),
// //   new Website('654', 'Wikipedia'),
// // ];
// //
//
