import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
   // users: User[] = [
   //    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
   //    new User('234', 'bob', 'bob', 'Bob', 'Marley'),
   //    new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
   //    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
   //  ];
  baseUrl = environment.baseUrl;

  constructor(private  http: Http) { }

  createUser(user) {
    const url =  this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
    // this.users.push(user);
    // return user;
  }
  // newUserId() {
  //   return (Number(this.users[this.users.length - 1].uid) + 1).toString();
  // }


  findUserById (userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
   //  for (let x = 0; x < this.users.length; x++) {
   //    if (this.users[x].uid === userId) {
   //      return this.users[x];
   //  }
   // }
  }

  findUserByUsername(username) {
    const url =  this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username) {
    //     return this.users[x];
    //   }
    // }
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username && this.users[x].password === password) {
    //     return this.users[x];
    //   }
    // }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
    // for (let x = 0; x < this.users.length; x++) {
    //   const _user = this.users[x];
    //   if (_user.uid === user.uid) {
    //     this.users[x] = user;
    //     // this.users[x].firstName = user.firstName;
    //     // this.users[x].lastName = user.lastName;
    //   }
    // }
  }
  deleteUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  //   for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].uid === userId) {
  //       // return delete this.users[x];
  //     this.users.splice(x, 1);
  //     }
  //   }
  // }
}


// findUserByCredentials(username, password) {
//   return this.users.find(function (user) {
//     return user.username === username && user.password === password;
//   });
// }
// findUserByUsername(username) {
//   return this.users.find(function (user) {
//     return user.username === username;
//   });
// }
// findUserById (userId) {
//   return this.users.find(function (user) {
//     return user._id === userId;
//   });
//
// }
