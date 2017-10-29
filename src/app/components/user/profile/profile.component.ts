import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model.client';
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

  preUsername: String;
  usernameOccupied: boolean;
  // user: User;
  user: User = {
    uid: this.uid,
    username: this.username,
    password: '',
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName
  };
  aUser: User;


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  update() {
    this.username = this.profileForm.value.username;
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;

    if (this.aUser && this.username !== this.preUsername) {
      this.usernameOccupied = true;
    } else {
      const updatedUser: User = {
      uid: this.uid,
      username: this.username,
      password: this.user.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
  };
      this.userService.updateUser(this.uid, updatedUser)
        .subscribe((Nuser: User) => {
          this.user = Nuser;
        });
      this.preUsername = this.username;
    }
  }

  findWebsite () {
        this.router.navigate(['/user/', this.uid, 'website']);
      }

  deleteUser(userId) {
    this.userService.deleteUser(this.uid)
      .subscribe((user: User) => {
        this.router.navigate(['login/']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
      this.uid = params['uid'];

      this.userService.findUserById(this.uid)
        .subscribe((user: User) => {
          this.user = user;
          console.log(this.user);
          this.username = this.user['username'];
          this.firstName = this.user['firstName'];
          this.lastName = this.user['lastName'];
          this.email = this.user['email'];
          // this.preUsername = this.user['username'];
        });
    });
  }
}


