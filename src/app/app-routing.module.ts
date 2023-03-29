import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./features/home/home-routing.module";
import {LoginFormComponent} from "./features/login/login-form/login-form.component";
import {RegisterFormComponent} from "./features/login/register-form/register-form.component";
import {PropertyRoutingModule} from "./features/property/property-routing.module";
import {OwnerRoutingModule} from "./features/owner/owner-routing.module";
import {TenantRoutingModule} from "./features/tenant/tenant-routing.module";
import {AuthGuard} from "./common/auth/auth-guard";
import {LeaseContractRoutingModule} from "./features/lease-contract/lease-contract-routing.module";
import {FixtureInventoryRoutingModule} from "./features/fixture-inventory/fixture-inventory-routing.module";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => HomeRoutingModule,
      },
      {
        path: 'biens',
        loadChildren: () => PropertyRoutingModule,
      },
      {
        path: 'proprietaires',
        loadChildren: () => OwnerRoutingModule,
      },
      {
        path: 'locataires',
        loadChildren: () => TenantRoutingModule,
      },
      {
        path: 'contrats-location',
        loadChildren: () => LeaseContractRoutingModule,
      },
      {
        path: 'etats-des-lieux',
        loadChildren: () => FixtureInventoryRoutingModule,
      }
    ]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
