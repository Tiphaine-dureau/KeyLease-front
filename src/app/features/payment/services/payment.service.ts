import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getPaymentsByLeaseContractId(leaseContractId: string): Observable<PaymentBusinessModel[]> {
    return this.http.get<PaymentBusinessModel[]>(`${environment.apiUrl}/payments/lease-contract/` + leaseContractId);
  }
}
