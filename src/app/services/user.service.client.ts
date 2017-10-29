import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private  http: Http) { }

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user) {
    user.uid = (Math.random()).toString();
    const url =  this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
          return response.json();
        }
      );
  }


  findUserById (userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username) {
    const url =  this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
          return response.json();
        });
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
          return response.json();
        });
  }
  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
          return response.json();
        });
  }
}

