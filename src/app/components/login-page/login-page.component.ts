import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public environmentRegister : string;
  constructor(){
    this.environmentRegister = "/" + enviroment.pathRegister;
  }
}
