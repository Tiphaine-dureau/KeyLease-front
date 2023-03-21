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
import {HomeModule} from "./features/home/home.module";
import {PropertyModule} from "./features/property/property.module";
import {OwnerModule} from "./features/owner/owner.module";
import {TenantModule} from "./features/tenant/tenant.module";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {NgxsModule} from "@ngxs/store";
import {AuthState} from "./common/auth/auth-state";
import {environment} from "../environments/environment";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {AuthGuard} from "./common/auth/auth-guard";
import {TOKEN_KEY} from "./features/login/services/login.service";
import {LeaseContractModule} from "./features/lease-contract/lease-contract.module";

@NgModule({
  declarations: [
    AppComponent,
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
    PropertyModule,
    OwnerModule,
    TenantModule,
    MatNativeDateModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: TOKEN_KEY
    }),
    LeaseContractModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'fr-FR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
