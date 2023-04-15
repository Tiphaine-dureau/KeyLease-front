import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    return this.http.get<TenantBusinessModel[]>(`${environment.apiUrl}/tenants`);
  }

  public getTenant(tenantId: string): Observable<TenantBusinessModel> {
    return this.http.get<TenantBusinessModel>(`${environment.apiUrl}/tenants/${tenantId}`);
  }

  public postTenant(tenantBusinessModel: TenantBusinessModel): Observable<TenantBusinessModel> {
    return this.http.post<TenantBusinessModel>(`${environment.apiUrl}/tenants`, tenantBusinessModel);
  }

  public putTenant(tenantBusinessModel: TenantBusinessModel, tenantId: string): Observable<TenantBusinessModel> {
    return this.http.put<TenantBusinessModel>(`${environment.apiUrl}/tenants/${tenantId}`, tenantBusinessModel);
  }

  public deleteTenant(tenantId: string): Observable<TenantBusinessModel> {
    return this.http.delete<TenantBusinessModel>(`${environment.apiUrl}/tenants/${tenantId}`);
  }

  public getRentReceipt(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers
      .set('Accept', 'application/pdf')
      .set('Content-Type', 'application/pdf');
    return this.http.get(`${environment.apiUrl}/receipt`, {
      headers: headers,
      responseType: 'blob',
      observe: 'response' as 'body'
    });
  }
}
