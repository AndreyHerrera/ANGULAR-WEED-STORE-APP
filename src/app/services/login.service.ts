import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { LoginForm } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly url = `${api.apiLogin}`;

  constructor(private readonly http:HttpClient) { }

  loginUser(loginForm: LoginForm){
    return this.http.post(this.url, loginForm);
  }
}
