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
    
    login(loginInfo) {
      return this._http.post(`${Api_Url}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
        localStorage.setItem('token', token.token);
      })
    }
}

