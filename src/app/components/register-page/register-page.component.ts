import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  public enviromentLogin : string

  constructor(){
    this.enviromentLogin = "/" + enviroment.pathLogin
  }
}
