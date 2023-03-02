import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginFormService} from "../services/login-form.service";
import {LoginFormModel} from "./login-form.model";
import {UserService} from "../../../common/services/user.service";
import {UserBusinessModel} from "../../../common/business-models/user.business-model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public hide = true;
  public isLoading = false;
  public loginForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private http: HttpClient,
    private loginService: LoginFormService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.formSubmitted = true;
    const formData = this.loginForm.value as LoginFormModel;
    this.loginService.postLogin(formData).subscribe({
      next: () => {
        this.onPostLoginResponse("Connexion réussie", "✅");
        this.router.navigateByUrl('/')
        this.getUsers();
      },
      error: () => {
        this.onPostLoginResponse("Une erreur est survenue, réessayez plus tard", "️⚠️");
      }
    })
  }

  private onPostLoginResponse(snackBarMessage: string, snackBarAction: string): void {
    this.formSubmitted = false;
    this.isLoading = false;
    this.snackBar.open(snackBarMessage, snackBarAction, {
      duration: 3000,
    });
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((users: UserBusinessModel[]) => {
      console.warn(users);
    })
  }
}



