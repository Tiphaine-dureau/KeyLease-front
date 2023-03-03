import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {LoginFormModel} from "./login-form.model";
import {UserService} from "../../../common/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {Login} from "../../../common/auth/login";
import {catchError, map, of} from "rxjs";

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
    private loginService: AuthService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private store: Store
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
    this.store.dispatch(new Login(formData))
      .pipe(
        map(() => {
          this.onPostLoginResponse("Connexion réussie", "✅");
        }),
        catchError(err => {
          this.onPostLoginResponse("Une erreur est survenue, réessayez plus tard", "️⚠️")
          return of('')
        })
      ).subscribe();
  }

  private onPostLoginResponse(snackBarMessage: string, snackBarAction: string): void {
    this.formSubmitted = false;
    this.isLoading = false;
    this.snackBar.open(snackBarMessage, snackBarAction, {
      duration: 3000,
    });
  }
}



