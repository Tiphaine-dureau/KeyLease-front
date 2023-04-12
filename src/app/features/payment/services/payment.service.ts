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

  public getPayment(paymentId: string): Observable<PaymentBusinessModel> {
    return this.http.get<PaymentBusinessModel>(`${environment.apiUrl}/payments/${paymentId}`);
  }

  public getPaymentsByLeaseContractId(leaseContractId: string): Observable<PaymentBusinessModel[]> {
    return this.http.get<PaymentBusinessModel[]>(`${environment.apiUrl}/payments/lease-contract/` + leaseContractId);
  }

  public postPayment(model: PaymentBusinessModel): Observable<PaymentBusinessModel> {
    return this.http.post<PaymentBusinessModel>(`${environment.apiUrl}/payments`, model);
  }

  public updatePayment(paymentBusinessModel: PaymentBusinessModel, paymentId: string): Observable<PaymentBusinessModel> {
    return this.http.put<PaymentBusinessModel>(`${environment.apiUrl}/payments/${paymentId}`, paymentBusinessModel);
  }

  public deletePayment(paymentId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/payments/${paymentId}`);
  }
}
