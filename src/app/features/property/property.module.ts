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

@NgModule({
  declarations: [
    PropertiesDashboardComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class PropertyModule {
}
