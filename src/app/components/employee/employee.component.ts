import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenForm } from 'src/app/models/token.model';
import { AuthTokenService } from 'src/app/services/authtoken.service';
import { enviroment } from 'src/environments/environment';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  public token: string | null;
  constructor(
    private readonly router: Router,
    private readonly authtokenService: AuthTokenService
  ) {
    this.token = localStorage.getItem("AuthToken");
    const tokenForm: TokenForm = {
      AuthToken : this.token
    }
    this.authtokenService.tokenUser(tokenForm).subscribe((resp: any) => {
      if (resp.AuthToken === 'false' || resp.AuthToken === null) {
        this.router.navigateByUrl(enviroment.pathHome);
      }
    }, () => {
      this.router.navigateByUrl(enviroment.pathHome);
    });
  }
}
