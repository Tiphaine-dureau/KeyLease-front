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
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "../../common/components/components.module";
import {MatDividerModule} from "@angular/material/divider";

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
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ComponentsModule,
    MatDividerModule,
  ]
})
export class PaymentModule {
}
