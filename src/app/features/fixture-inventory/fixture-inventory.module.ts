import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixtureInventoryDetailComponent} from "./fixture-inventory-detail/fixture-inventory-detail.component";
import {CreateFixtureInventoryComponent} from "./create-fixture-inventory/create-fixture-inventory.component";
import {UpdateFixtureInventoryComponent} from "./update-fixture-inventory/update-fixture-inventory.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {FixtureInventoryFormComponent} from './fixture-inventory-form/fixture-inventory-form.component';
import {ComponentsModule} from "../../common/components/components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {TitleComponent} from "../../common/components/title/title.component";
import {LabelValueComponent} from "../../common/components/label-value/label-value.component";
import {DialogComponent} from "../../common/components/dialog/dialog.component";

@NgModule({
  declarations: [
    FixtureInventoryDetailComponent,
    CreateFixtureInventoryComponent,
    UpdateFixtureInventoryComponent,
    FixtureInventoryFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule,
    ComponentsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    TitleComponent,
    LabelValueComponent,
    DialogComponent
  ]
})
export class FixtureInventoryModule {
}
