import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getProperties(): Observable<PropertyBusinessModel[]> {
    return this.http.get<PropertyBusinessModel[]>(`${environment.apiUrl}/properties`);
  }

  public getProperty(propertyId: string): Observable<PropertyBusinessModel> {
    return this.http.get<PropertyBusinessModel>(`${environment.apiUrl}/properties/${propertyId}`);
  }

  public postProperty(propertyBusinessModel: PropertyBusinessModel): Observable<PropertyBusinessModel> {
    return this.http.post<PropertyBusinessModel>(`${environment.apiUrl}/properties`, propertyBusinessModel);
  }

  public modifyProperty(propertyBusinessModel: PropertyBusinessModel, propertyId: string): Observable<PropertyBusinessModel> {
    return this.http.put<PropertyBusinessModel>(`${environment.apiUrl}/properties/${propertyId}`, propertyBusinessModel);
  }

  public deleteProperty(propertyId: string): Observable<PropertyBusinessModel> {
    return this.http.delete<PropertyBusinessModel>(`${environment.apiUrl}/properties/${propertyId}`);
  }
}
