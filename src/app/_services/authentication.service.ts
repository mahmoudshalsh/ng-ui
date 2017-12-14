import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../_models';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http
      .post<User>('/api/authenticate', { username: username, password: password })
      .map(user => {
        // login successfully if there's a jwt token in response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
