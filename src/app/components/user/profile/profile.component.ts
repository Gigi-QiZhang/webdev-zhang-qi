import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model.client';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;
  uid: String;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  update() {
    // console.log(user);
    this.username = this.updateForm.value.username;
    this.firstName = this.updateForm.value.firstName;
    this.lastName = this.updateForm.value.lastName;
    this.email = this.updateForm.value.email;

    const updatedUser: User = {
      uid: this.user.uid,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.user.password
    };
    console.log(updatedUser);
    this.userService.updateUser(this.uid, updatedUser);
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.uid = params['uid'];
      });
      // alert('userId: ' + this.uid);
      this.user = this.userService.findUserById(this.uid);
      this.username = this.user['username'];
      this.firstName = this.user['firstName'];
      this.lastName = this.user['lastName'];
      this.email = this.user['email'];
  }
}


// findWebsite () {
//   const websites = this.websiteService.findWebsitesByUser(this.userId);
//     if (websites) {
//       for (const website of websites) {
//         this.router.navigate(['/profile', this.userId, '/website']);
//       }
//       this.errorFlag = true;
//       this.errorMsg = 'Invalid input';
//     }
// }
