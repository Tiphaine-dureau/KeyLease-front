import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OwnerDashboardComponent} from "./owner-dashboard/owner-dashboard.component";
import {CreateOwnerComponent} from "./create-owner/create-owner.component";


const routes: Routes = [
  {path: '', component: OwnerDashboardComponent},
  {path: 'creation', component: CreateOwnerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {
}
