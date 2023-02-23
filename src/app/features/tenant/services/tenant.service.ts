import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) {
  }

  public getTenants(): Observable<TenantBusinessModel[]> {
    return this.http.get<TenantBusinessModel[]>(`${environment.apiUrl}/tenants`)
  }

  public postTenant(tenantBusinessModel: TenantBusinessModel): Observable<TenantBusinessModel> {
    return this.http.post<TenantBusinessModel>(`${environment.apiUrl}/tenants`, tenantBusinessModel)
  }

  public getTenant(tenantId: string): Observable<TenantBusinessModel> {
    return this.http.get<TenantBusinessModel>(`${environment.apiUrl}/tenants/${tenantId}`);
  }
}
