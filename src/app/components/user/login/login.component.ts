import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  loginError: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  login() {
    // console.log('login' + username);
    // console.log(password);
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: User) => {
          this.loginError = false;
          this.router.navigate(['/user', user.uid]);
        }, (error: any) => {
      this.loginError = true;
    });
  }
  ngOnInit() {
  }
}

  // buttonClicked(event: any) {
  //   console.log(event); // your custom code on button click
  // }

  // this.title = 'This is Login Page';
  // this.disabledFlag = true;
  // if (username === 'alice' && password === 'alice') {
  //   this.router.navigate(['/profile']);
  //   // alert('username: ' + this.username);
  // }
  // this.router.navigate(['/profile/123']);
  // }



