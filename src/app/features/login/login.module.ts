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
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../common/components/components.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {AccountComponent} from "./account/account.component";
import {TitleComponent} from "../../common/components/title/title.component";

@NgModule({
  declarations: [
    AccountComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  exports: [
    AccountComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ComponentsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    TitleComponent
  ],
  providers: [],
})
export class LoginModule {
}
