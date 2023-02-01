import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantsDashboardComponent} from "./tenants-dashboard/tenants-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateTenantComponent} from './update-tenant/update-tenant.component';
import {TenantDetailComponent} from './tenant-detail/tenant-detail.component';

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
    RouterLink
  ]
})
export class TenantModule {
}
