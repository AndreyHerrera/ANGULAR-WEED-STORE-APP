import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { enviroment } from '../environments/environment';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: enviroment.pathRegister, component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
