import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PaymentsDashboardComponent} from "./payments-dashboard/payments-dashboard.component";
import {CreatePaymentComponent} from "./create-payment/create-payment.component";
import {UpdatePaymentComponent} from "./update-payment/update-payment.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentsDashboardComponent
  },
  {
    path: 'creation/:id_contrat',
    component: CreatePaymentComponent
  },
  {
    path: ':id_paiement/:id_contrat',
    children: [
      {
        path: 'modification',
        component: UpdatePaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {
}
