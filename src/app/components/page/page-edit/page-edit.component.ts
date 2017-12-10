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
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;

  pid: String;
  wid: String;
  uid: String;
  name: String;
  description: String;
  page: Page = {
    pid: '',
    name: '',
    _websiteId: '',
    description: ''
  };
  pages: Page[];
  user: {};

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }


  deletePage() {
    this.pageService.deletePage(this.pid)
      .subscribe((data: any) => this.router.navigate(['user', 'website', this.wid, 'page']),
        (error) => console.log(error)
      );
  }

  updatePage() {
    const newPage: Page = {
      pid: this.pid,
      name: this.page.name,
      _websiteId: this.uid,
      description: this.page.description,
    };
    // console.log(this.page);
    this.pageService.updatePage(this.pid, newPage)
      .subscribe((page) => {
        this.router.navigate(['user', 'website', this.wid, 'page']);
        console.log(this.page);
      });
  }



  ngOnInit() {
    this.getUser();

    this.activatedRoute.params.subscribe((params: any) => {
      this.wid = params['wid'];
      this.pid = params['pid'];
    });


    this.pageService.findPageById(this.pid)
      .subscribe((page) => {
        this.page = page;
        // this.name = this.page.name;
        // this.description = this.page.description;
      });

    this.pageService.findAllPagesForWebsite(this.wid)
      .subscribe((pages) => {
        this.pages = pages;
        // this.name = this.page.name;
        // this.description = this.page.description;
      });
  }
}
