import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TenantsDashboardComponent} from "./tenants-dashboard/tenants-dashboard.component";
import {CreateTenantComponent} from "./create-tenant/create-tenant.component";
import {UpdateTenantComponent} from "./update-tenant/update-tenant.component";
import {TenantDetailComponent} from "./tenant-detail/tenant-detail.component";

const routes: Routes = [
  {
    path: '',
    component: TenantsDashboardComponent
  },
  {
    path: 'creation',
    component: CreateTenantComponent
  },
  {
    path: ':id_tenant',
    children: [
      {
        path: '',
        component: TenantDetailComponent
      },
      {
        path: 'modification',
        component: UpdateTenantComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule {
}
