import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'You must be 21 years old to enter this site.',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes, I am over 21',
      cancelButtonText: 'No, I am under 21',
      showCancelButton: false,
      showCloseButton: true,
    });

    localStorage.setItem('AuthToken', 'false');
    this.enviromentLogin = '/' + enviroment.pathLogin;
    this.enviromentRegister = '/' + enviroment.pathRegister;
  }
}
