import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantsDashboardComponent} from "./tenants-dashboard/tenants-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";
import {MatButtonModule} from "@angular/material/button";
import {UpdateTenantComponent} from './update-tenant/update-tenant.component';
import {TenantDetailComponent} from './tenant-detail/tenant-detail.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {TenantFormComponent} from './tenant-form/tenant-form.component';
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "../../common/components/components.module";
import {MatCardModule} from "@angular/material/card";
import {PaymentModule} from "../payment/payment.module";
import {RouterModule} from "@angular/router";
import {TitleComponent} from "../../common/components/title/title.component";
import {LabelValueComponent} from "../../common/components/label-value/label-value.component";
import {DialogComponent} from "../../common/components/dialog/dialog.component";

@NgModule({
  declarations: [
    TenantsDashboardComponent,
    CreateTenantComponent,
    UpdateTenantComponent,
    TenantDetailComponent,
    TenantFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    ComponentsModule,
    MatCardModule,
    PaymentModule,
    TitleComponent,
    LabelValueComponent,
    DialogComponent
  ]
})
export class TenantModule {
}
