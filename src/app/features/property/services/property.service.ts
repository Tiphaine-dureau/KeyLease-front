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
    return this.http.get<PropertyBusinessModel[]>(`${environment.apiUrl}/properties`)
  }
}
