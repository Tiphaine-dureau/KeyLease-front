import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesDashboardComponent} from "./properties-dashboard/properties-dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {CreatePropertyComponent} from "./create-property/create-property.component";
import {RouterLink} from "@angular/router";
import {UpdatePropertyComponent} from './update-property/update-property.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {PropertyFormComponent} from './property-form/property-form.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";
import {ComponentsModule} from "../../common/components/components.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    PropertiesDashboardComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    PropertyDetailComponent,
    PropertyFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatRadioModule,
    ComponentsModule,
    MatCardModule
  ]
})
export class PropertyModule {
}
