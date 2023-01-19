import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormLoginComponent} from "./form-login/form-login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./services/login.service";

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
