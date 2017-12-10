import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model.client';
import { SharedService } from '../../../services/shared.service.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  uid: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  user: {};

  prevUsername: String;
  usernameTaken: boolean;
  submitSuccess: boolean;
  aUser: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.uid = this.user['_id'];
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

  update() {
    this.username = this.profileForm.value.username;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
    this.email = this.profileForm.value.email;

    const updatedUser: User = {
      uid: this.uid,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    // console.log(updatedUser);
    this.userService.updateUser(this.uid, updatedUser).
    subscribe((newUser) => {
      // console.log(status);
      this.user = newUser;
      // console.log(this.user);
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.uid)
      .subscribe((status) => {
      console.log(status);
    });
  }

  ngOnInit() {
    // console.log(this.sharedService.user);
    this.user = this.sharedService.user;
    this.getUser();
    this.userService.findUserById(this.uid).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    });
  }
}





