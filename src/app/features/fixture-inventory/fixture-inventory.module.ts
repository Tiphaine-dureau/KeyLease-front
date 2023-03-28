import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixtureInventoryDetailComponent} from "./fixture-inventory-detail/fixture-inventory-detail.component";
import {CreateFixtureInventoryComponent} from "./create-fixture-inventory/create-fixture-inventory.component";
import {UpdateFixtureInventoryComponent} from "./update-fixture-inventory/update-fixture-inventory.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    FixtureInventoryDetailComponent,
    CreateFixtureInventoryComponent,
    UpdateFixtureInventoryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ]
})
export class FixtureInventoryModule {
}
