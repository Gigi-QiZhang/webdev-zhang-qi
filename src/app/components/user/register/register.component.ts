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
  // user: User;
  verifyPassword: String;
  usernameError: boolean;
  passwordError: boolean;


  user = {};
  errorFlag: boolean;
  errorMsg: string;


  constructor(private userService: UserService,
              private router: Router) { }

  // register() {
  //   this.username = this.registerForm.value.username;
  //   this.password = this.registerForm.value.password;
  //   this.verifyPassword = this.registerForm.value.verifyPassword;
  //
  //   if (this.password !== this.verifyPassword) {
  //     this.passwordError = true;
  //   } else {
  //     this.userService.findUserByUsername(this.username)
  //       .subscribe((user: User) => {
  //           this.user = user;
  //           if (!this.user) {
  //             const newUser: User = {
  //               uid: '',
  //               username: this.username,
  //               password: this.password,
  //               firstName: '',
  //               lastName: '',
  //               email: ''
  //             };
  //             this.userService.createUser(newUser)
  //               .subscribe((nUser: User) => {
  //                 this.router.navigate(['user', nUser.uid]);
  //               }, (error: any) => {
  //                 this.usernameError = true;
  //               });
  //           } else { this.usernameError = true; }
  //         }
  //       );
  //   }
  // }


  Register(username, password, verifyPassword) {
    /*    const userNew = {'_id': '123', 'username': username, 'email': '', 'password': password, 'firstname': '', 'lastname': ''};
        console.log(userNew);
        this.userService.createUser(userNew);
        this.router.navigate(['/user', userNew._id]);
      }*/
    if (username === '' || password === '' || password !== verifyPassword ) {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username/password or password not the same!';
    } else {
      // asking the server to navigate at a time when it is convenient, while returning its own thing from client at the same time
      return this.userService.createUser(new User('', username, password, '', ''))
        .subscribe((user: User) => {
          this.router.navigate(['user/', user.uid]);
        });
    }
  }


  ngOnInit() {
  }
}
// alert(this.username);
// if (this.username.length === 0 || this.password.length === 0 || this.verifyPassword.length === 0) {
//   alert('please input information');
// } else if (!(this.password === this.verifyPassword)) {
//   alert('password not matched');
// } else if (this.user = this.userService.findUserByUsername(this.username)) {
//   alert('user exists');
// }
//
// const newUser: User = {
//   uid: this.userService.newUserId(),
//   username: this.username,
//   password: this.password,
//   firstName: '',
//   lastName: '',
//   email: ''
// };
// this.userService.createUser(newUser);
// this.router.navigate(['/login']);
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../../../services/user.service.client';
// import { User } from '../../../models/user.model.client';
// import { NgForm } from '@angular/forms';
//
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   @ViewChild('f') registerForm: NgForm;
//   username: String;
//   password: string;
//   user: User;
//   verifypassword: String;
//
//   constructor(private userService: UserService,
//               private router: Router) { }
//   register(username: String, password: String, verifypassword: String) {
//     // alert(this.username);
//     if (this.username.length === 0 || this.password.length === 0 || this.verifypassword.length === 0) {
//       alert('please input information');
//     } else if (!(this.password === this.verifypassword)) {
//       alert('password not matched');
//     } else if (this.user = this.userService.findUserByUsername(this.username)) {
//       alert('user exists');
//     }
//
//     const newUser: User = {
//       uid: this.userService.newUserId(),
//       username: this.username,
//       password: this.password,
//       firstName: '',
//       lastName: '',
//       email: ''
//     };
//     this.userService.createUser(newUser);
//     this.router.navigate(['/login']);
//   }
//   ngOnInit() {
//   }
//
// }
