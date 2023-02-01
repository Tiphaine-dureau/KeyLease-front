import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PropertiesDashboardComponent} from "./properties-dashboard/properties-dashboard.component";
import {CreatePropertyComponent} from "./create-property/create-property.component";
import {UpdatePropertyComponent} from "./update-property/update-property.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PropertiesDashboardComponent
  },
  {
    path: 'creation',
    component: CreatePropertyComponent
  },
  {
    path: ':id_property',
    children: [
      {
        path: '',
        component: PropertyDetailComponent
      },
      {
        path: 'modification',
        component: UpdatePropertyComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule {
}
