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
  verifyPassword: String;
  user = {};
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService,
              private router: Router) { }

  register(username, password, verifyPassword) {
    if (username === '' || password === '' || password !== verifyPassword ) {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username/password or password not the same!';
    } else {
      return this.userService.createUser(new User('', username, password, '', ''))
        .subscribe((user: User) => {
          this.router.navigate(['user/', user.uid]);
        });
    }
  }
  ngOnInit() {
  }
}
