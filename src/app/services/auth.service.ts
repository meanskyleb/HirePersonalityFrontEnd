import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../Models/Token';
import { UserInfo } from '../Models/UserInfo';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RegisterUser } from '../Models/RegisterUser';
import { FormGroup } from '@angular/forms';

const Api_Url = "https://localhost:44311";

@Injectable()

export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  loginInfo: UserInfo;
 

  constructor(private _http: HttpClient) { }

    register(regUserData: RegisterUser) {
      return this._http.post(`${Api_Url}/api/Auth/Register`, regUserData)
    }
    
   
  // login(loginInfo) {
  //   const str =
  //   `grant_type=password&email=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
  
  //   return this._http.post(`${Api_Url}`, str).subscribe((token: Token) => {
  //     this.userInfo = token;
  //     localStorage.setItem('token', token.token);
  //     this.isLoggedIn.next(true);
  //     this._router.navigate(['/']);
  //   });}

  //   private setHeader(): HttpHeaders {
  //     return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  //   }

  //   logout() {
  //     localStorage.clear();
  //     this.isLoggedIn.next(false);

  //     const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  //     this._http.post(`${Api_Url}/api/Account/Logout`, { headers: authHeader});
  //     this._router.navigate(['/login']);
  //   }
    
}

