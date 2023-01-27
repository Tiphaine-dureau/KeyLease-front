import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../services/login.service";
import {LoginFormModel} from "./login-form.model";
import {UserService} from "../../../common/services/user.service";
import {UserBusinessModel} from "../../../common/business-models/user.business-model";

@Component({
  selector: 'app-form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public hide = true;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private userService: UserService
  ) {
  }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  public onSubmit(): void {
    this.loginService.postLogin(this.loginForm.value as LoginFormModel).subscribe(() => {
      this.getUsers();
    })
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((users: UserBusinessModel[]) => {
      console.warn(users);
    })
  }
}
