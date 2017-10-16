import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class UserService {
  users: User[];
  constructor() {
    this.users = [
      new User('123', 'alice', 'qqq'),
      new User('234', 'bob', 'qqq'),
      new User('345', 'charlie', 'qqq'),
      new User('456', 'jannunzi', 'qqq')
    ];
  }
  // users: User[] = [
  //     new User('123', 'alice', 'qqq'),
  //     new User('234', 'bob', 'qqq'),
  //     new User('345', 'charlie', 'qqq'),
  //     new User('456', 'jannunzi', 'qqq')
  //   ];
  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  // findUserById (userId) {
  //   return this.users.find(function (user) {
  //     return user._id === userId;
  //   });
  //
  // }
  findUserById (userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
    }
   }
  }

  // findUserByUsername(username) {
  //   return this.users.find(function (user) {
  //     return user.username === username;
  //   });
  // }
  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  // findUserByCredentials(username, password) {
  //   return this.users.find(function (user) {
  //     return user.username === username && user.password === password;
  //   });
  // }
  findUserByCredentials(username, password) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }
  updateUser(user: User) {
    for (let x = 0; x < this.users.length; x++) {
      const _user = this.users[x];
      if (_user._id === user._id) {
        this.users[x] = user;
        // this.users[x].firstName = user.firstName;
        // this.users[x].lastName = user.lastName;
      }
    }
  }
  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        // return delete this.users[x];
      this.users.splice(x, 1);
      }
    }
  }
}




