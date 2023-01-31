import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {TabsComponent} from './tabs/tabs.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {CardComponent} from './card/card.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    ToolbarComponent,
    TabsComponent,
    CardComponent
  ],
  exports: [
    SpinnerComponent,
    ToolbarComponent,
    TabsComponent,
    CardComponent
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
  ]
})
export class ComponentsModule {
}
