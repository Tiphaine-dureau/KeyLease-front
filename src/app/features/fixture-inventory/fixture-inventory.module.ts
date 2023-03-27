import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixtureInventoryDetailComponent} from "./fixture-inventory-detail/fixture-inventory-detail.component";
import {CreateFixtureInventoryComponent} from "./create-fixture-inventory/create-fixture-inventory.component";
import {UpdateFixtureInventoryComponent} from "./update-fixture-inventory/update-fixture-inventory.component";

@NgModule({
  declarations: [
    FixtureInventoryDetailComponent,
    CreateFixtureInventoryComponent,
    UpdateFixtureInventoryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FixtureInventoryModule {
}
