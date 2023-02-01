import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnerDashboardComponent} from "./owner-dashboard/owner-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    OwnerDashboardComponent,
    CreateOwnerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ]
})
export class OwnerModule {
}
