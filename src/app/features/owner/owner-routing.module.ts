import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OwnersDashboardComponent} from "./owners-dashboard/owners-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";
import {UpdateOwnerComponent} from "./update-owner/update-owner.component";
import {OwnerDetailComponent} from "./owner-detail/owner-detail.component";

const routes: Routes = [
  {
    path: '',
    component: OwnersDashboardComponent
  },
  {
    path: 'creation',
    component: CreateOwnerComponent
  },
  {
    path: ':id_proprietaire',
    children: [
      {
        path: '',
        component: OwnerDetailComponent
      },
      {
        path: 'modification',
        component: UpdateOwnerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {
}
