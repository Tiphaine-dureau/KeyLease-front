import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {CardComponent} from './card/card.component';
import {HeaderComponent} from "./header/header.component";
import {ClientListComponent} from './client-list/client-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    SpinnerComponent,
    ToolbarComponent,
    CardComponent,
    HeaderComponent,
    ClientListComponent
  ],
  exports: [
    SpinnerComponent,
    ToolbarComponent,
    CardComponent,
    HeaderComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    MatTabsModule,
    MatCardModule,
    RouterLinkActive,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ]
})
export class ComponentsModule {
}
