import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PropertyDashboardComponent} from "./property-dashboard/property-dashboard.component";
import {CreatePropertyComponent} from "./create-property/create-property.component";

const routes: Routes = [
  {path: '', component: PropertyDashboardComponent},
  {path: 'creation', component: CreatePropertyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule {
}
