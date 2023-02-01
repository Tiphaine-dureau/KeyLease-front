import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnersDashboardComponent} from "./owners-dashboard/owners-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateOwnerComponent} from './update-owner/update-owner.component';
import {OwnerDetailComponent} from './owner-detail/owner-detail.component';

@NgModule({
  declarations: [
    OwnersDashboardComponent,
    CreateOwnerComponent,
    UpdateOwnerComponent,
    OwnerDetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ]
})
export class OwnerModule {
}
