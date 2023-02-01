import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TenantDashboardComponent} from "./tenant-dashboard/tenant-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";

const routes: Routes = [
  {path: '', component: TenantDashboardComponent},
  {path: 'creation', component: CreateTenantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule {
}
