import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";
import {LoginFormModel} from "../login-form/login-form.model";
import {LoginBusinessModel} from "../login-form/login-business.model";
import {SKIP_AUTH_BEARER} from "../../../common/interceptors/auth.interceptor";

export const TOKEN_KEY = 'keylease_token'

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) {
  }

  public postLogin(formLoginModel: LoginFormModel): Observable<LoginBusinessModel> {
    return this.http.post<LoginBusinessModel>(`${environment.apiUrl}/login`, formLoginModel,
      {context: new HttpContext().set(SKIP_AUTH_BEARER, true)})
      .pipe(
        map((loginBusinessModel: LoginBusinessModel) => {
          LoginFormService.setSession(loginBusinessModel);
          return loginBusinessModel;
        })
      );
  }

  public removeSession(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  private static setSession(loginBusinessModel: LoginBusinessModel): void {
    localStorage.setItem(TOKEN_KEY, loginBusinessModel.token);
  }
}

