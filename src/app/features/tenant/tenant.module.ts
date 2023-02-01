import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantDashboardComponent} from "./tenant-dashboard/tenant-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";

@NgModule({
  declarations: [
    TenantDashboardComponent,
    CreateTenantComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TenantModule {
}
