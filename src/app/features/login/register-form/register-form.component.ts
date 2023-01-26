import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RegisterFormService} from "../services/register-form.service";
import {RegisterFormModel} from "./register-form.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  public hide = true;

  constructor(
    private http: HttpClient,
    private registerService: RegisterFormService
  ) {
  }

  public registerForm: FormGroup = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // Restrict passwords to a length of 8 to 20 aplhanumeric characters and select special characters.
    // The password also can not start with a digit, underscore or special character and must contain at least one digit.
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=[^\\d_].*?\\d)\\w(\\w|[!@#$%]){7,20}')]),
  })

  public onSubmit(): void {
    // TODO dans le subscribe boolean a true si succès qui affiche le bouton et le message de succès
    this.registerService.postRegister(this.registerForm.value as RegisterFormModel).subscribe()
  }
}
