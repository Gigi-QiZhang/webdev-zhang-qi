import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  pid: String;
  wid: string;
  uid: String;
  name: String;
  description: String;
  title: String;
  page: Page;
  pages: Page[];

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      }
    );
    // this.page = this.pageService.findPageByWebsiteId(this.wid);
    // this.name = this.page['name'];
    // this.title = this.title['description'];
    this.pages = this.pageService.findPagesByWebsiteId(this.wid);
  }
}

