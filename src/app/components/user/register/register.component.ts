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
  @ViewChild('f') registerForm: NgForm;
  username: String;
  password: string;
  user: User;
  verifypassword: String;

  constructor(private userService: UserService,
              private router: Router) { }
  register(username: String, password: String, verifypassword: String) {
    // alert(this.username);
    if (this.username.length === 0 || this.password.length === 0 || this.verifypassword.length === 0) {
      alert('please input information');
    } else if (!(this.password === this.verifypassword)) {
      alert('password not matched');
    } else if (this.user = this.userService.findUserByUsername(this.username)) {
      alert('user exists');
    }

    const newUser: User = {
      uid: this.userService.newUserId(),
      username: this.username,
      password: this.password,
      firstName: '',
      lastName: '',
      email: ''
    };
    this.userService.createUser(newUser);
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
