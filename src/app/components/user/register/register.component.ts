import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: string;
  user: User;
  verifypassword: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private userService: UserService,
              private router: Router) { }

  // function: register
  // createUser(user) {
  //   // const user: User = this.userService.createUser();
  //     this.router.navigate(['/profile', user._id]);
  // }
  // register() {
  //   // alert(this.username);
  //   if (this.username.length === 0 || this.password.length === 0 || this.verifypassword.length === 0) {
  //     alert('please input information!');
  //   } else if (!(this.password === this.verifypassword)) {
  //      alert('password not matched');
  //   } else {
  //     this.user = this.userService.findUserByCredentials(this.username, this.password);
  //   }
  //   if (this.user) {
  //     alert('user exists');
  //   } else {
  //     alert ('registered');
  //   }
  //   const newUser: User = this.userService.createUser(this.user);
  //     this.userService.createUser(newUser);
  //     this.router.navigate(['/login']);
  //   }
  ngOnInit() {
  }

}
