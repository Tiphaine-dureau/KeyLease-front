import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RegisterFormService} from "../services/register-form.service";
import {RegisterFormModel} from "./register-form.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public hide = true;
  public isLoading = false;
  public registerForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private http: HttpClient,
    private registerService: RegisterFormService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$')]),
      // Restrict passwords to a length of 8 to 20 aplhanumeric characters and select special characters.
      // The password also can not start with a digit, underscore or special character and must contain at least one digit.
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=[^\\d_].*?\\d)\\w(\\w|[!@#$%]){7,20}')]),
    })
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.formSubmitted = true;
    const formData = this.registerForm.value as RegisterFormModel;
    this.registerService.postRegister(formData).subscribe({
      next: () => {
        this.onPostRegisterResponse("Enregistrement validé! ", "✅");
        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.onPostRegisterResponse("Une erreur est survenue, réessayez plus tard.", "⚠️");
      }
    })
  }

  private onPostRegisterResponse(snackBarMessage: string, snackBarAction: string): void {
    this.formSubmitted = false;
    this.isLoading = false;
    this.snackBar.open(snackBarMessage, snackBarAction, {
      duration: 3000,
    });
  }
}
