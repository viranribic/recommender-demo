import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/map';

import * as moment from 'moment';
import {AppSettings} from '../appSettings';


@Injectable()
export class AuthService {
  token: string;
  private apiUrl = AppSettings.API_URL;

  constructor(private router: Router,
              private http: HttpClient,
              public jwtHelper: JwtHelperService) {}

  login(username: string , password: string) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl  + 'api-token-auth/',
      JSON.stringify({ username: username, password: password }),
      {headers: headers}).map((response: Response) => {

        const token = response['token'];

        if (token) {
          // set token property
          this.token = token;
          localStorage.setItem('id_token', token);
          return true;
        } else {
          return false;
        }
    }).shareReplay();
  }

  signup(username: string , email: string, password: string) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl + 'api/register/',
      JSON.stringify({ username: username, email: email, password: password }),
      {headers: headers});

  }

  logout() {
    // This should be enough.
    localStorage.removeItem('id_token');
  }

  public isLoggedIn() {
    // console.log('Is token expired? ' + this.jwtHelper.isTokenExpired());
    return !this.jwtHelper.isTokenExpired(); // AngularJwt is used only for this small thing. Consider replacing this logic.
  }




}
