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


@NgModule({
  declarations: [
    SpinnerComponent,
    ToolbarComponent,
    TabsComponent
  ],
  exports: [
    SpinnerComponent,
    ToolbarComponent,
    TabsComponent
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
  ]
})
export class ComponentsModule {
}
