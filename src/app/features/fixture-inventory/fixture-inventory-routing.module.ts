import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateFixtureInventoryComponent} from "./create-fixture-inventory/create-fixture-inventory.component";
import {FixtureInventoryDetailComponent} from "./fixture-inventory-detail/fixture-inventory-detail.component";
import {UpdateFixtureInventoryComponent} from "./update-fixture-inventory/update-fixture-inventory.component";

const routes: Routes = [
  {
    path: 'creation/:id_bien',
    component: CreateFixtureInventoryComponent
  },
  {
    path: ':id_etat-des-lieux',
    children: [
      {
        path: '',
        component: FixtureInventoryDetailComponent
      },
      {
        path: 'modification',
        component: UpdateFixtureInventoryComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixtureInventoryRoutingModule {
}
