import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  // @ViewChild('f') websiteForm: NgForm;

  wid: String;
  uid: String;
  websites: Website[];
  name: String;
  // developerId: String;
  // user: {};
  description: String;

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  // newWebsite() {
  //   this.router.navigate(['user', this.uid, 'website', 'new']);
  // }

  // findEditWebsite(website) {
  //   if (website) {
  //     this.router.navigate(['user', this.uid, 'website', website.wid]);
  //   }
  // }

  // selectWebsite(websiteId) {
  //   this.websiteService.findWebsiteById(websiteId)
  //     .subscribe((website) => {
  //       this.name = website.name;
  //       this.description = website.description;
  //     });
  // }
  //
  // deleteWebsite(websiteId) {
  //   this.websiteService.deleteWebsite(websiteId)
  //     .subscribe((websites) => {
  //       this.websites = websites;
  //     });
  // }
  // deleteWebsite() {
  //   this.websiteService.deleteWebsite(this.wid)
  //     .subscribe((websites: Website[]) => {
  //       this.websites = websites;
  //       this.router.navigate(['user', this.uid, 'website']);
  //     });
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        // this.wid = params['wid'];
        this.websiteService.findWebsitesByUser(this.uid)
          .subscribe((websites: Website[]) => {
            this.websites = websites;
          });
      });
  }
}
