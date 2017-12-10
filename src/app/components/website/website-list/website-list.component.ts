import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { SharedService } from '../../../services/shared.service.client';



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
  developerId: String;
  user: {};
  description: String;

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }

  ngOnInit() {
    this.getUser();

    this.user = this.sharedService.user;
    this.uid = this.user['_id'];

    this.websiteService.findWebsitesByUser(this.uid)
      .subscribe((websites) => {
        this.websites = websites;
        console.log(websites);
      });
  }
}


