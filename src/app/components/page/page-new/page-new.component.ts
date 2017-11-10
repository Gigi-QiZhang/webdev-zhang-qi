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
  @ViewChild('f') pageNewForm: NgForm;
  pid: String;
  wid: String;
  uid: String;
  name: String;
  description: String;
  page: Page;
  pages: Page[];

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  createPage(name, title) {
    const page: Page = new Page('', name, '', title);
    this.pageService.createPage(this.wid, page)
      .subscribe((pages) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });

    this.pageService.findAllPagesForWebsite(this.wid)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
        // this.name = this.page['name'];
        // this.description = this.page['description'];
      });
  }
}


