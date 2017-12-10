import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service.client';


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
              private router: Router,
              private sharedService: SharedService) { }

  register(username, password, verifyPassword) {
    //   this.username = this.registerForm.value.username;
    //   this.password = this.registerForm.value.password;
    //   this.verifyPassword = this.registerForm.value.verifyPassword;
    this.username = username;
    this.password = password;
    this.verifyPassword = verifyPassword;
    console.log(this.username, this.password, this.verifyPassword);

    if (this.password === this.verifyPassword) {
      this.userService.register(this.username, this.password)
        .subscribe(
          (user) => {
            this.sharedService.user = user;
            this.router.navigate(['/profile']);
          },
          (error: any) => {
            console.log(error);
            this.errorMsg = error._body;
          }
        );
    } else {
      this.errorMsg = 'Passwords do not match!';
    }
  }

  ngOnInit() {
  }

}
