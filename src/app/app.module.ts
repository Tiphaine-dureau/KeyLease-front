import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterLink} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from "./features/login/login.module";
import {AuthInterceptor} from "./common/interceptors/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import {ComponentsModule} from "./common/components/components.module";
import {HeaderComponent} from './features/header/header.component';
import {HomeModule} from "./features/home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
