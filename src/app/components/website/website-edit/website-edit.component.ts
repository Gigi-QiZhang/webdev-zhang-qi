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
  developerId: String;
  name: String;
  description: String;
  website: Website;
  websites: Website[];
  user: {};
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  edit(name, description) {
    this.name = this.editForm.value.name;
    this.description = this.editForm.value.description;

    const editedWebsite: Website = {
      wid: this.website.wid,
      name: this.name,
      developerId: this.uid,
      description: this.description
    };
    if (name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Must input valid website name';
    }
    // console.log(editedWebsite);
    this.websiteService.updateWebsite(this.wid, editedWebsite)
      .subscribe((website: Website) => {
        this.website = editedWebsite;
        this.name = name;
        this.description = description;
      });
  }

  remove(websiteId) {
    this.websiteService.deleteWebsite(this.wid)
      .subscribe((website: Website) => {
        this.router.navigate(['/user/', this.uid, '/website']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    // alert('userId: ' + this.uid);
    this.websiteService.findWebsiteById(this.uid, this.wid)
      .subscribe((website: Website) => {
        // this.website = website;
        this.name = this.website['name'];
        this.description = this.website['description'];
      });
    this.websiteService.findAllWebsitesForUser(this.uid)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
      });
  }
}


