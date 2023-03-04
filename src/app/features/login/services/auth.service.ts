import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {Observable, of} from "rxjs";
import {LoginFormModel} from "../login-form/login-form.model";
import {LoginBusinessModel} from "../login-form/login-business.model";
import {SKIP_AUTH_BEARER} from "../../../common/interceptors/auth.interceptor";

export const TOKEN_KEY = 'auth.token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(formLoginModel: LoginFormModel): Observable<LoginBusinessModel> {
    return this.http.post<LoginBusinessModel>(`${environment.apiUrl}/login`, formLoginModel,
      {
        context: new HttpContext().set(SKIP_AUTH_BEARER, true)
      });
  }

  public removeSession(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  public logout(): Observable<boolean> {
    this.removeSession();
    return of(true);
  }
}

