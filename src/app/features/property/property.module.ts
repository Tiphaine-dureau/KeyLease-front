import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesDashboardComponent} from "./properties-dashboard/properties-dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {CreatePropertyComponent} from "./create-property/create-property.component";
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
import {MatTooltipModule} from "@angular/material/tooltip";
import {TitleComponent} from "../../common/components/title/title.component";
import {RouterModule} from "@angular/router";
import {LabelValueComponent} from "../../common/components/label-value/label-value.component";

@NgModule({
  declarations: [
    PropertiesDashboardComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    PropertyDetailComponent,
    PropertyFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatRadioModule,
    ComponentsModule,
    MatCardModule,
    MatTooltipModule,
    TitleComponent,
    LabelValueComponent
  ]
})
export class PropertyModule {
}
