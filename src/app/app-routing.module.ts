import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { enviroment } from '../environments/environment';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : enviroment.pathLogin, component : LoginPageComponent},
  {path : enviroment.pathRegister, component : RegisterPageComponent},
  {path : enviroment.pathEmployee, component : EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
