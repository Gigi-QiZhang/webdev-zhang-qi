import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
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
  updatedUser: User;

  username: String;
  email: String;
  firstName: String;
  lastName: String;
  preUsername: String;
  usernameTaken: boolean;
  updateSuccess: boolean;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  update() {
    // console.log(user);
    this.username = this.updateForm.value.username;
    this.firstName = this.updateForm.value.firstName;
    this.lastName = this.updateForm.value.lastName;
    this.email = this.updateForm.value.email;
    this.usernameTaken = false;
    this.updateSuccess = false;

    this.userService.findUserByUsername(this.username)
      .subscribe((user: User) => {
      this.updatedUser = user;
      });

    if (this.updatedUser && this.username !== this.preUsername) {
      this.usernameTaken = true;
    } else {
      const updatedUser: User = {
        uid: this.user.uid,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.user.password
      };
      // console.log(updatedUser);
      this.userService.updateUser(this.uid, updatedUser)
        .subscribe((newUser: User) => {
        this.user = newUser;
        });
      this.updateSuccess = true;
      this.preUsername = this.username;
    }
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.uid = params['uid'];
      // alert('userId: ' + this.uid);
      // this.user = this.userService.findUserById(this.uid);
      this.userService.findUserById(this.uid)
        .subscribe((user: User) => {
        this.user = user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.preUsername = this.user['username'];
        });
      });
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
