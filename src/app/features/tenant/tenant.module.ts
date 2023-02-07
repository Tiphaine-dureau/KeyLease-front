import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantsDashboardComponent} from "./tenants-dashboard/tenants-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateTenantComponent} from './update-tenant/update-tenant.component';
import {TenantDetailComponent} from './tenant-detail/tenant-detail.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    TenantsDashboardComponent,
    CreateTenantComponent,
    UpdateTenantComponent,
    TenantDetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
  ]
})
export class TenantModule {
}
