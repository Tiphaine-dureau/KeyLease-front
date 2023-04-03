import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePaymentComponent} from './create-payment/create-payment.component';
import {UpdatePaymentComponent} from './update-payment/update-payment.component';
import {PaymentsDashboardComponent} from './payments-dashboard/payments-dashboard.component';
import {PaymentFormComponent} from './payment-form/payment-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    CreatePaymentComponent,
    UpdatePaymentComponent,
    PaymentsDashboardComponent,
    PaymentFormComponent
  ],
  exports: [
    PaymentsDashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterLink,
  ]
})
export class PaymentModule {
}
