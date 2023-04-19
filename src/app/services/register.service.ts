import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { RegisterForm } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly url = `${api.apiRegister}`;

  constructor(private readonly http:HttpClient) { }

  registerUser(registerForm: RegisterForm){
    return this.http.post(this.url, registerForm);
  }
}
