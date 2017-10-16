import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // hello: String = 'Hello from component';
  errorFlag: boolean;
  errorMsg: string;
  username: String;
  password: String;

  constructor(private userService: UserService,
              private router: Router) { }

  // function: login
  login(username: String, password: String) {
    // console.log('login' + username);
    // console.log(password);

    const user: User = this.userService.findUserByCredentials(username, password);
    if (user) {
      alert(user._id);
      this.router.navigate(['/profile', user._id]);
    }
      // this.router.navigate(['/profile/123']);
    // } else {
    //   this.errorFlag = true;
    //   this.errorMsg = 'Error';
    //  // alert('wrong username or password');
    //
    // }
      // if (username === 'alice' && password === 'alice') {
    //   this.router.navigate(['/profile']);
    //   // alert('username: ' + this.username);
    // }
  }
  ngOnInit() {
  }

}
