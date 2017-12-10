import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  // properties
  pid: String;
  wid: String;
  uid: String;
  name: String;
  user: any;
  description: String;
  // page: Page;
  // pages: Page[];
  page = {};
  pages = [];
  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }


  ngOnInit() {
    this.getUser();
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];

    this.activatedRoute.params
      .subscribe((params: any) => {
        this.wid = params['wid'];
        // this.pid = params['pid'];
      });
    this.pageService.findAllPagesForWebsite(this.wid)
      .subscribe((pages: Page[]) => {
      this.pages = pages;
      });
  }
}
