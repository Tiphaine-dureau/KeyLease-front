import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) {
  }

  public getOwners(): Observable<OwnerBusinessModel[]> {
    return this.http.get<OwnerBusinessModel[]>(`${environment.apiUrl}/owners`);
  }
}
