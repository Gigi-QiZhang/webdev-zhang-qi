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
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteNewForm: NgForm;

  name: String;
  uid: String;
  wid: String;
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
              private sharedService: SharedService) { }


  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }


  create() {
    const website: Website = {
      wid: this.wid,
      name: this.website.name,
      description: this.website.description,
      developerId: this.uid
    };
    // console.log(website);
    this.websiteService.createWebsite(this.uid, website)
      .subscribe((data: any) => this.router.navigate(['user', 'website']),
        (error: any) => console.log(error)
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
          this.websites = data;
          console.log(this.websites); },
        (error) => console.log(error)
      );
  }

}
