import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// injecting service into module

import { User } from '../model/user.model.client';



@Injectable()
export class UserService {
  users: User[] = [
  new User('123', ' alice', 'aaa'),
  new User('234', ' bob', 'bbb'),
  new User('345', ' charlie', 'ccc'),
  new User('456', ' david', 'ddd'),
  ];
  // api = {
  //   'createUser' : this.createUser,
  //   'findUserById' : this.findUserByID,
  //   'findUserByUsername' : this.findUserByUsername,
  //   'updateUser' : this.updateUser,
  //   'deleteUser' : this.deleteUser,
  // };

  // createUser(user: any) {
  //    user._id = Math.random();
  //    this.users.push(user);
  //   return user;
  // }
  findUserById (userId: String) {
    return this.users.find(function(user) {
      return user._id === userId;
    });
  }
  findUserByUsername(username: string) {
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username) { return this.users[x]; }
    // }
    return this.users.find(function(user) {
      return user.username === username;
      });
  }
  findUserByCredentials(username: string, password: string) {
    return this.users.find(function(user) {
      return user.username === username && user.password === password;
      });
  }
  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      const _user = this.users[i];
      if (_user._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }
  //
  // updateUser(userId: string, user: any) {
  //   for (let x = 0; x < this.users.length; x++) {
  //      if (this.users[x]._id === userId) {
  //        this.users.push(user);
  //        return user;
  //      }
  //   }
  // }
  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return delete this.users[x];
      }
    }
  }
}




//
// @Injectable()
// export class UserService {
//   constructor() { }
//   users = [
//     {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
//     {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
//     {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
//   ];
//   api = {
//     'createUser' : this.createUser,
//     'findUserById' : this.findUserById,
//     'findUserByUsername' : this.findUserByUsername,
//     'updateUser' : this.updateUser,
//     'deleteUser' : this.deleteUser,
//   };
//   createUser(user: any) {
//     user._id = Math.random();
//     this.users.push(user);
//     return user;
//   }
//   findUserById(userId: string) {
//     for (let x = 0; x < this.users.length; x++) {
//       if (this.users[x]._id === userId) { return this.users[x]; }
//     }
//   }
//   findUserByUsername(username: string) {
//     for (let x = 0; x < this.users.length; x++) {
//       if (this.users[x].username === username) { return this.users[x]; }
//     }
//   }
//   findUserByCredentials(username: string, password: string) {
//     for (let x = 0; x < this.users.length; x++) {
//       if (this.users[x].username === username && this.users[x].password === password) {return this.users[x];}
//     }
//   }
//   updateUser(userId: string, user: any) {
//     for (let x = 0; x < this.users.length; x++) {
//
//     }
//   }
//   deleteUser(userId: string) { … }
// }
//


// delete(userId: string) {
//   this.service.delete(userId).then(() => {
//     let index = this.documents.findIndex(d => d.userId === userId);
//     this.documents.splice(index, 1);
//     }
//   );
//   event.stopPropagation();
// }
