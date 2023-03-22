import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateLeaseContractComponent} from './create-lease-contract/create-lease-contract.component';
import {UpdateLeaseContractComponent} from './update-lease-contract/update-lease-contract.component';
import {LeaseContractDetailComponent} from "./lease-contract-detail/lease-contract-detail.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {LeaseContractFormComponent} from './lease-contract-form/lease-contract-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../../common/components/components.module";


@NgModule({
  declarations: [
    LeaseContractDetailComponent,
    CreateLeaseContractComponent,
    UpdateLeaseContractComponent,
    LeaseContractFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class LeaseContractModule {
}
