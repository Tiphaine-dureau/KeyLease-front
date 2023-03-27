import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {environment} from "../../../../environments/environment";
import {PostLeaseContractModel} from "./post-lease-contract.model";

@Injectable({
  providedIn: 'root'
})
export class LeaseContractService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getLeaseContract(leaseContractId: string): Observable<LeaseContractBusinessModel> {
    return this.http.get<LeaseContractBusinessModel>(`${environment.apiUrl}/lease-contracts/${leaseContractId}`);
  }

  public postLeaseContract(model: PostLeaseContractModel): Observable<LeaseContractBusinessModel> {
    return this.http.post<LeaseContractBusinessModel>(`${environment.apiUrl}/lease-contracts`, model);
  }

  public deleteLeaseContract(leaseContractId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/lease-contracts/${leaseContractId}`);
  }

  public modifyLeaseContract(leaseContractId: string, model: PostLeaseContractModel): Observable<LeaseContractBusinessModel> {
    return this.http.put<LeaseContractBusinessModel>(`${environment.apiUrl}/lease-contracts/${leaseContractId}`, model);
  }
}
