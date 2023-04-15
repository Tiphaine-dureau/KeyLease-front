import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../services/login.service";
import {LoginFormModel} from "./login-form.model";
import {UserService} from "../../../common/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {Login} from "../../../common/auth/login";
import {catchError, map, Observable, of} from "rxjs";
import {AuthState} from "../../../common/auth/auth-state";

@Component({
  selector: 'app-form-login',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  public hidePassword = true;
  public loginForm!: FormGroup;
  @Select(AuthState.isLoading) isLoading$!: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
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
    this.snackBar.open(snackBarMessage, snackBarAction, {
      duration: 3000,
    });
  }

  public adminLoginDemo() {
    const formData = {
      email: "admin@keylease.com",
      password: "adminkeylease"
    } as LoginFormModel;
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

  public userLoginDemo() {
    const formData = {
      email: "agent@keylease.com",
      password: "agentkeylease"
    } as LoginFormModel;
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
}



