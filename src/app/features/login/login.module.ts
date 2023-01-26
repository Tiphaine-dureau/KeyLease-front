import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from "./login-form/login-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
})
export class LoginModule {
}
