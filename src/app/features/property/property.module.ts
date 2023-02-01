import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertyDashboardComponent} from "./property-dashboard/property-dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {CreatePropertyComponent} from "./create-property/create-property.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    PropertyDashboardComponent,
    CreatePropertyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ]
})
export class PropertyModule {
}
