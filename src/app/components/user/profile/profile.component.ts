import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: {};
  username: String;
  // firstName: String;
  // lastName: String;
  // Email: String;
  errorFlag: boolean;
  errorMsg: String;
  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  // updateUser(user) {
  //   // console.log(user);
  //   this.userService.updateUser(user);
  // }
  // findWebsite () {
  //   const websites = this.websiteService.findWebsiteByUser(this.userId);
  //     if (websites) {
  //       for (const web of websites) {
  //         this.router.navigate(['/profile', this.userId, '/website', websites]);
  //       }
  //       this.errorFlag = true;
  //       this.errorMsg = 'Invalid input';
  //     }
  // }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.userId = params['userId'];
      });
      // alert('userId: ' + this.userId);
      this.user = this.userService.findUserById(this.userId);
      this.username = this.user['username'];
      // this.firstName = this.user['firstName'];
      // this.lastName = this.user['lastName'];
      // this.Email = this.user['Email'];
      // }
  }
}
