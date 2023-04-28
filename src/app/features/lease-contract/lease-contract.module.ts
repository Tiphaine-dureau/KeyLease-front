import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {CreateLeaseContractComponent} from './create-lease-contract/create-lease-contract.component';
import {UpdateLeaseContractComponent} from './update-lease-contract/update-lease-contract.component';
import {LeaseContractDetailComponent} from "./lease-contract-detail/lease-contract-detail.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {LeaseContractFormComponent} from './lease-contract-form/lease-contract-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../../common/components/components.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {TitleComponent} from "../../common/components/title/title.component";
import {LabelValueComponent} from "../../common/components/label-value/label-value.component";
import {DialogComponent} from "../../common/components/dialog/dialog.component";


@NgModule({
  declarations: [
    LeaseContractDetailComponent,
    CreateLeaseContractComponent,
    UpdateLeaseContractComponent,
    LeaseContractFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatDatepickerModule,
    MatIconModule,
    TitleComponent,
    LabelValueComponent,
    DialogComponent
  ],
  providers: [
    DatePipe
  ]
})
export class LeaseContractModule {
}
