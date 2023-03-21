import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateLeaseContractComponent} from './create-lease-contract/create-lease-contract.component';
import {UpdateLeaseContractComponent} from './update-lease-contract/update-lease-contract.component';
import {LeaseContractDetailComponent} from "./lease-contract-detail/lease-contract-detail.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    LeaseContractDetailComponent,
    CreateLeaseContractComponent,
    UpdateLeaseContractComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ]
})
export class LeaseContractModule {
}
