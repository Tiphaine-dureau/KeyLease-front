import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {HomeCardComponent} from './home-card/home-card.component';
import {HeaderComponent} from "./header/header.component";
import {ClientListComponent} from './client-list/client-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {IdentityCardComponent} from './identity-card/identity-card.component';
import {MatDividerModule} from "@angular/material/divider";
import {PropertyCardComponent} from "./property-card/property-card.component";
import {AlertComponent} from "./alert/alert.component";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LabelValueComponent} from "./label-value/label-value.component";
import {BalanceCardComponent} from './balance-card/balance-card.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerComponent,
    ToolbarComponent,
    HomeCardComponent,
    HeaderComponent,
    ClientListComponent,
    IdentityCardComponent,
    PropertyCardComponent,
    BalanceCardComponent
  ],
  exports: [
    AlertComponent,
    SpinnerComponent,
    ToolbarComponent,
    HomeCardComponent,
    HeaderComponent,
    ClientListComponent,
    IdentityCardComponent,
    PropertyCardComponent,
    BalanceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatDividerModule,
    MatTooltipModule,
    LabelValueComponent,
    MatProgressBarModule
  ]
})
export class ComponentsModule {
}
