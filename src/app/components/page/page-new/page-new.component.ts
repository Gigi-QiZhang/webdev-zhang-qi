import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../services/shared.service.client';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageNewForm: NgForm;
  pid: String;
  wid: String;
  uid: String;
  name: String;
  description: String;
  title: String;
  page = {
    name: '',
    title: '',
    widgets: []
  };
  // page: Page = {
  //   pid: '',
  //   name: '',
  //   _websiteId: '',
  //   description: ''
  // };

  pages: Page[];
  user: {};
  error: string;
  alert: string;
  errFlag: boolean;

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }


  create() {
    this.pageService.createPage(this.wid, this.page)
      .subscribe(
        (data: any) => this.router.navigate(['/user', 'website', this.wid, 'page']),
        (error: any) => console.log(error)
      );
    // const newPage: Page = {
    //   pid: '',
    //   name: this.name,
    //   _websiteId: this.wid,
    //   description: this.title
    // };
    //
    // this.pageService.createPage(this.wid, newPage)
    //   .subscribe((page) =>
    //     // this.pages = pages;
    //       this.router.navigate(['user', 'website', this.wid, 'page']),
    //     (error: any) => console.log(error)
    //   );
  }

  ngOnInit() {
    this.errFlag = false;
    this.error = 'Enter the name of the Page';
    this.alert = 'Enter the Page name';

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wid = params['wid'];
      }
    );
    // this.getUser();
    //
    // this.activatedRoute.params.subscribe((params: any) => {
    //   this.wid = params['wid'];
    //   this.pid = params['pid'];
    // });
    //
    // this.pageService.findPageById(this.pid)
    //   .subscribe((page) => {
    //     this.page = page;
    // }, (error) => console.log(error)
    //   );

    // this.pageService.findAllPagesForWebsite(this.wid)
    //   .subscribe((pages) => {
    //     this.pages = pages;
    //     }, (error) => console.log(error)
    //   );
  }

}


