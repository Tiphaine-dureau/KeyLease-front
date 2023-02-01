import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnerDashboardComponent} from "./owner-dashboard/owner-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";

@NgModule({
  declarations: [
    OwnerDashboardComponent,
    CreateOwnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OwnerModule {
}
