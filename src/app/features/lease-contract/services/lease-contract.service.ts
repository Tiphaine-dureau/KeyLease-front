import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {environment} from "../../../../environments/environment";

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
}
