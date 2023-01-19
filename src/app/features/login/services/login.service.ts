import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {FormLoginModel} from "../form-login/form-login.model";
import {TokenModel} from "../form-login/token.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public postLogin(formLoginModel: FormLoginModel): Observable<TokenModel> {
    return this.http.post<TokenModel>(`${environment.apiUrl}/login`, formLoginModel);
  }
}

