import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  uid: String;
  wid: String;
  pid: String;
  name: String;
  description: String;
  website: Website;
  websites: Website[];
  user: {};

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  editWebsite () {
    this.name = this.editForm.value.name;
    this.description = this.editForm.value.description;
    const editedWebsite = new Website(this.website.wid, this.name, this.uid, this.description);
    this.websiteService.updateWebsite(this.wid, editedWebsite)
    .subscribe((website: Website) => {
      this.website = website;
      this.router.navigate(['user', this.uid, 'website']);
    });
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.wid)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
        this.router.navigate(['user', this.uid, 'website']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    this.websiteService.findWebsitesByUser(this.uid)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
        // this.name = this.website['name'];
        // this.description = this.website['description'];
        this.websiteService.findWebsiteById(this.wid)
          .subscribe((website: Website) => {
            this.website = website;
          });
      });
  }
}


