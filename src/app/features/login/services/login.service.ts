import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";
import {FormLoginModel} from "../form-login/form-login.model";
import {LoginBusinessModel} from "../form-login/login-business.model";
import {SKIP_AUTH_BEARER} from "../../../common/interceptors/auth.interceptor";

export const TOKEN_KEY = 'keylease_token'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public postLogin(formLoginModel: FormLoginModel): Observable<LoginBusinessModel> {
    return this.http.post<LoginBusinessModel>(`${environment.apiUrl}/login`, formLoginModel,
      {context: new HttpContext().set(SKIP_AUTH_BEARER, true)})
      .pipe(
        map((loginBusinessModel: LoginBusinessModel) => {
          LoginService.setSession(loginBusinessModel);
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

