import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, 
    public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // If token is expired
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(credentials): Observable<any> {
    
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {

    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
