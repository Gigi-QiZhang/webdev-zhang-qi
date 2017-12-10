import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SharedService } from './shared.service.client';


@Injectable()
export class UserService {
  constructor(private http: Http,
              private router: Router,
              private sharedService: SharedService)   { }

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          alert('Please login first.');
          return false;
        }
      });
  }

  register (username, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }


  login(username, password) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username : username,
      password : password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  createUser(user) {
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
      .map((res: Response) => {
        return res.json();
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


