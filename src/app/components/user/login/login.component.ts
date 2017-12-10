import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;


  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  // login(username, password) {
  //   this.userService
  //     .login(this.username, this.password)
  //     .subscribe((user) => {
  //     this.sharedService.user = user;
  //     this.router.navigate(['/profile']);
  //     });
  //    }
  // login() {
  //   this.username = this.loginForm.value.username;
  //   this.password = this.loginForm.value.password;
  //   this.userService.findUserByCredentials(this.username, this.password)
  //     .subscribe((user: any) => {
  //       if (user) {
  //         this.router.navigate(['/user/', user._id]);
  //       }
  //     });
  // }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this. userService . login (this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/profile']); },
        (error: any) => {
          console.log(error);
        }
      );
  }


  ngOnInit() {
  }

}
