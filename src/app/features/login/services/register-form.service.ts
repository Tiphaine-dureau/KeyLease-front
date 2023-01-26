import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegisterFormModel} from "../register-form/register-form.model";
import {environment} from "../../../../environments/environment";
import {LoginBusinessModel} from "../login-form/login-business.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(private http: HttpClient) {
  }

  public postRegister(registerFormModel: RegisterFormModel): Observable<LoginBusinessModel> {
    return this.http.post<any>(`${environment.apiUrl}/register`, registerFormModel)
  }
}
