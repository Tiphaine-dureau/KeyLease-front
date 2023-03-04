import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserBusinessModel} from "../business-models/user.business-model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<UserBusinessModel[]> {
    return this.http.get<UserBusinessModel[]>(`${environment.apiUrl}/users`);
  }

  public getMe(): Observable<UserBusinessModel> {
    return this.http.get<UserBusinessModel>(`${environment.apiUrl}/me`)
  }
}
