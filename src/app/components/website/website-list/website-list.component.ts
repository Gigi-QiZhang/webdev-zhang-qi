import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  _id: String;
  name: String;
  developerId: String;
  websites = [{}];
  userId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  // toProfile() {
  //   this.router.navigate(['/profile', this._id]);
  // }
  ngOnInit() {
    //   this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['userId'];
    //     }
    //   );
    //   const websites = this.websiteService.findWebsiteByUser(this.userId);
    // }

  }
}
