import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;

  pid: String;
  wid: string;
  uid: String;
  name: String;
  description: String;

  page: Page;
  pages: Page[];
  errorFlag: boolean;
  errorMsg: string;

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  edit(name, description) {
    this.name = this.editForm.value.name;
    this.description = this.editForm.value.description;

    const editedPage: Page = {
      pid: this.page.pid,
      name: this.name,
      wid: this.wid,
      description: this.description,
    };

    if (name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid new page name';
    } else {
      this.pageService.updatePage(this.pid, editedPage)
        .subscribe((page: Page) => {
        this.page = editedPage;
          this.name = name;
          this.description = description;
        });
    }
  }

  remove(PageId) {
    this.pageService.deletePage(this.pid)
      .subscribe((page: Page) => {
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);
      });
  }



  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      }
    );
    this.pageService.findAllPagesForWebsiteId(this.wid)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
      });
    this.pageService.findPageById(this.pid)
      .subscribe((page: Page) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
      });
  }
}
