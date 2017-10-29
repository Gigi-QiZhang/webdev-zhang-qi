import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: User) => {
          if (user) {
            this.router.navigate(['/user/', user.uid]);
          }
        });
  }

  ngOnInit() {
  }

}

//
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../../../services/user.service.client';
// import { User } from '../../../models/user.model.client';
// import { NgForm } from '@angular/forms';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   @ViewChild('f') loginForm: NgForm;
//   errorFlag: boolean;
//   errorMsg: string;
//   username: string;
//   password: string;
//   title: string;
//   disabledFlag: boolean;
//
//   constructor(private userService: UserService,
//               private router: Router) {
//   }
//
//
//   login() {
//     // console.log('login' + username);
//     // console.log(password);
//     this.username = this.loginForm.value.username;
//     this.password = this.loginForm.value.password;
//     const user: User = this.userService.findUserByCredentials(this.username, this.password);
//     if (user) {
//       // alert(user._id);
//       this.router.navigate(['/profile', user.uid]);
//     } else {
//       this.errorFlag = true;
//       this.errorMsg = 'Error';
//       // alert('wrong username or password');
//     }
//   }
//
//   ngOnInit() {
//     this.title = 'This is Login Page';
//     this.disabledFlag = true;
//   }
//
//   buttonClicked(event: any) {
//     console.log(event); // your custom code on button click
//   }
// }
//   // if (username === 'alice' && password === 'alice') {
//   //   this.router.navigate(['/profile']);
//   //   // alert('username: ' + this.username);
//   // }
//   // this.router.navigate(['/profile/123']);
//   // }
//
//
//
