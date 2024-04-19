import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./infrastructure/auth/auth.module";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Interceptor} from "./infrastructure/auth/interceptor";
import {SharedService} from "./services/shared.service";
import {LayoutModule} from "./layout/layout.module";
import {CertificatesModule} from "./certificates/certificates.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    LayoutModule,
    CertificatesModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,

    },
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
