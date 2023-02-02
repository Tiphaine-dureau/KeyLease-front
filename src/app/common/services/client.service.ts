import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ClientBusinessModel} from "../business-models/client.business-model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getClients(): Observable<ClientBusinessModel[]> {
    return this.http.get<ClientBusinessModel[]>(`${environment.apiUrl}/clients`);
  }
}
