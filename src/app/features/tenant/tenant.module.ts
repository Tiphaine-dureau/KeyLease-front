import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TenantDashboardComponent} from "./tenant-dashboard/tenant-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    TenantDashboardComponent,
    CreateTenantComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ]
})
export class TenantModule {
}
