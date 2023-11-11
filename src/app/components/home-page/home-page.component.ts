import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public enviromentLogin: string;
  public enviromentRegister: string;
  acceptButton: {} = {};

  constructor() {
    localStorage.setItem('AuthToken', 'false');
    this.enviromentLogin = '/' + enviroment.pathLogin;
    this.enviromentRegister = '/' + enviroment.pathRegister;
  }
}
