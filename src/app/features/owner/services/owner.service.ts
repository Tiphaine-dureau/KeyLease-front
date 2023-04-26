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

  public getOwner(ownerId: string): Observable<OwnerBusinessModel> {
    return this.http.get<OwnerBusinessModel>(`${environment.apiUrl}/owners/${ownerId}`);
  }

  public postOwner(ownerBusinessModel: OwnerBusinessModel): Observable<OwnerBusinessModel> {
    return this.http.post<OwnerBusinessModel>(`${environment.apiUrl}/owners`, ownerBusinessModel);
  }

  public putOwner(ownerBusinessModel: OwnerBusinessModel, ownerId: string): Observable<OwnerBusinessModel> {
    return this.http.put<OwnerBusinessModel>(`${environment.apiUrl}/owners/${ownerId}`, ownerBusinessModel);
  }

  public deleteOwner(ownerId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/owners/${ownerId}`);
  }
}
