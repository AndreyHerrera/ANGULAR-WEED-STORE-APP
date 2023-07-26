import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { TokenForm } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private readonly url = `${api.apiAuthToken}`;

  constructor(private readonly http:HttpClient) { }

  tokenUser(tokenForm: TokenForm){
    return this.http.post(this.url, tokenForm);
  }
}
