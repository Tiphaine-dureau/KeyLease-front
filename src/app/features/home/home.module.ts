import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ComponentsModule} from "../../common/components/components.module";
import {TitleComponent} from "../../common/components/title/title.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TitleComponent
  ]
})
export class HomeModule {
}
