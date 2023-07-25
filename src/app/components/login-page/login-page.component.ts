import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/login.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public environmentRegister : string;
  public formGroup !: FormGroup;
  private token !: string;

  constructor(
    private readonly FormBuilder : FormBuilder,
    private readonly loginService : LoginService,
    private readonly router: Router
  ){
    this.environmentRegister = "/" + enviroment.pathRegister;
    this.formLoginUser();
  }

  private formLoginUser(){
    this.formGroup = this.FormBuilder.group(
      {
        emailUser: [null, Validators.required],
        passwordUser: [null, Validators.required]
      }
    )
  }

  onSubmitFormLogin(){
    if (this.formGroup.valid){
      const loginForm: LoginForm = {
        email: this.formGroup.value.emailUser,
        password: this.formGroup.value.passwordUser
      }
      this.loginService.loginUser(loginForm).subscribe((resp : any) => {
        if (resp.AuthToken === false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
        else{
          localStorage.setItem("AuthToken" , resp.AuthToken);
          this.router.navigateByUrl(enviroment.pathEmployee);
        }
      }, () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
    }
  }
}
