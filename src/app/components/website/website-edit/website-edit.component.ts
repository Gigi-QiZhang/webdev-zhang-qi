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
  wid: string;
  developerId: String;
  name: String;
  description: String;
  website: Website;
  websites: Website[];


  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  edit() {
    this.name = this.editForm.value.name;
    this.description = this.editForm.value.description;

    const editedWebsite: Website = {
      wid: this.website.wid,
      name: this.name,
      developerId: this.description,
      description: this.description
    };
    console.log(editedWebsite);
    this.websiteService.updateWebsite(this.wid, editedWebsite);
  }

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


