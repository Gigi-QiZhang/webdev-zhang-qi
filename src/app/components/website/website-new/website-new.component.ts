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
  @ViewChild('f') websiteNewForm: NgForm;

  uid: String;
  name: String;
  description: String;
  website: Website;
  websites: Website[];



  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  createWebsite(name, description) {
    const website: Website = new Website('', name, '', description);
    this.websiteService.createWebsite(this.uid, website)
      .subscribe((websites) => {
        this.router.navigate(['user', this.uid, 'website']);
      });
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
      this.uid = params['uid'];
    });
    this.websiteService.findWebsitesByUser(this.uid)
      .subscribe((websites: Website[]) => {
      this.websites = websites;
    });
  }

}
