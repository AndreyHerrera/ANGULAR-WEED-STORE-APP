import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register.service';
import { enviroment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  public enviromentLogin: string
  public formGroup !: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) {
    localStorage.setItem("AuthToken" , "false");
    this.enviromentLogin = "/" + enviroment.pathLogin;
    this.formRegisterUser();
  }

  private formRegisterUser(){
    this.formGroup = this.formBuilder.group(
      {
        nameUser: [null, Validators.required],
        lastNameUser: [null, Validators.required],
        dniUser: [null, Validators.required],
        emailUser: [null, Validators.required],
        passwordUser: [null, Validators.required]
      }
    )
  }

  onSubmitFormRegister() {
    if (this.formGroup.valid) {
      const registerForm: RegisterForm = {
        name: this.formGroup.value.nameUser,
        lastName: this.formGroup.value.lastNameUser,
        dni: this.formGroup.value.dniUser,
        email: this.formGroup.value.emailUser,
        password: this.formGroup.value.passwordUser
      }
      this.registerService.registerUser(registerForm).subscribe(() => {
        Swal.fire('Successful', 'Your account has been registered!', 'success').then(() => {
          this.router.navigateByUrl(enviroment.pathLogin);
        });
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
