import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesDashboardComponent} from "./properties-dashboard/properties-dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {CreatePropertyComponent} from "./create-property/create-property.component";
import {RouterLink} from "@angular/router";
import {UpdatePropertyComponent} from './update-property/update-property.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';

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
    RouterLink
  ]
})
export class PropertyModule {
}
