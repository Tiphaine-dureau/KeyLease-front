import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../services/login.service";
import {FormLoginModel} from "./form-login.model";


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent {
  public hide = true;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {
  }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public onSubmit(): void {
    this.loginService.postLogin(this.loginForm.value as FormLoginModel).subscribe()
  }
}
