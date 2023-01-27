import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./features/login/login-form/login-form.component";
import {RegisterFormComponent} from "./features/login/register-form/register-form.component";

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
