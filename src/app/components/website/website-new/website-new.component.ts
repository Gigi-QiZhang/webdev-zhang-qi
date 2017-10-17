import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  // @ViewChild('f') loginForm: NgForm;
  // properties
  uid: String;
  wid: string;
  developerId: String;
  name: String;
  description: String;
  website: Website;
  websites: Website[];


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    // alert('userId: ' + this.uid);
    this.website = this.websiteService.findWebsiteByUser(this.uid);
    this.name = this.website['name'];
    this.description = this.website['description'];
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
  }

}
