import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, map } from "rxjs/operators";
import { User } from '../core/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = `${environment.apiUrl}users`;

  constructor(private httpclient: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<User> {
    return this.httpclient.get<User>(`${this.baseUrl}?username=${username}&password=${password}`).pipe(
      map(data => data[0]),
      tap(data => {
        localStorage.setItem("token", data.token);
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuth(): boolean {
    let token = localStorage.getItem("token");

    if (token) {
      const helper = new JwtHelperService();
      if (helper.isTokenExpired(token)) return false;

      return true;
    }

    return false;
  }

  getUser(): User {

    if (!this.isAuth()) return null;

    let token = localStorage.getItem("token");
    let decoded = new JwtHelperService().decodeToken(token);

    var user: User = {
      id: decoded["sub"],
      fullName: decoded["fullname"],
      roles: decoded["roles"]
    }

    return user;
  }

  getToken(): string {

    let token = localStorage.getItem("token");
    return token;
  }
}
