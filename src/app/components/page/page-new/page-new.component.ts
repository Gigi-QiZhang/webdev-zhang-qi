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
  title: String;
  page: Page;
  pages: Page[];
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  create(name, description) {
    if (name === '' || description === '') {
      this.errorFlag = true;
      this.errorMsg = 'Must input valid name or description';
    } else {
      return this.pageService.createPage(this.wid, new Page('', name, this.wid, description))
        .subscribe((page: Page) => {
          this.router.navigate(['/user/', this.uid, 'website', this.wid, 'page']);
        });
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    // alert('userId: ' + this.uid);
    this.pageService.findAllPagesForWebsiteId(this.wid)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
        this.name = this.page['name'];
        this.description = this.page['description'];
      });
  }
}

