import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LeaseContractDetailComponent} from "./lease-contract-detail/lease-contract-detail.component";
import {CreateLeaseContractComponent} from "./create-lease-contract/create-lease-contract.component";
import {UpdateLeaseContractComponent} from "./update-lease-contract/update-lease-contract.component";

const routes: Routes = [
  {
    path: 'creation/:id_bien',
    component: CreateLeaseContractComponent
  },
  {
    path: ':id_contrat-location',
    children: [
      {
        path: '',
        component: LeaseContractDetailComponent
      },
      {
        path: 'modification',
        component: UpdateLeaseContractComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaseContractRoutingModule {
}
