import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnersDashboardComponent} from "./owners-dashboard/owners-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateOwnerComponent} from './update-owner/update-owner.component';
import {OwnerDetailComponent} from './owner-detail/owner-detail.component';
import {ComponentsModule} from "../../common/components/components.module";
import {OwnerFormComponent} from './owner-form/owner-form.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    OwnersDashboardComponent,
    CreateOwnerComponent,
    UpdateOwnerComponent,
    OwnerDetailComponent,
    OwnerFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    ComponentsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class OwnerModule {
}
