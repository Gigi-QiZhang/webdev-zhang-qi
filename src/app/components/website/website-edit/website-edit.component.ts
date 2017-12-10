import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { SharedService } from '../../../services/shared.service.client';


@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  uid: String;
  wid: String;
  name: String;
  description: String;
  website: Website = {
    wid: '',
    name: '',
    developerId: '',
    description: ''
  };
  websites: Website[];
  user: {};

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }

  updateWebsite () {
    const newWebsite: Website = {
      wid: this.wid,
      name: this.website.name,
      developerId: this.uid,
      description: this.website.description,
    };
    this.websiteService.updateWebsite(this.wid, newWebsite)
      .subscribe((status) => {
        this.router.navigate(['user', 'website']);
        // console.log(status);
      });
  }


  deleteWebsite() {
    this.websiteService.deleteWebsite(this.wid)
      .subscribe((website) => this.router.navigate(['user', 'website']),
        (error) => console.log(error)
      );
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.wid = params['wid'];
    });

   this.websiteService.findWebsiteById(this.wid)
      .subscribe(
        (data: any) => {
          this.website = data;
         // console.log('website by id: ', this.website);
        }
      );

    this.websiteService.findWebsitesByUser(this.uid)
      .subscribe(
        (data: any) => {
          this.websites = data; },
        (error) => console.log(error)
      );
  }
}


