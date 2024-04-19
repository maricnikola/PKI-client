import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CertificatesModule} from "../certificates/certificates.module";
import { HomeComponent } from './home/home.component';
import {LayoutModule} from "../layout/layout.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CertificatesModule,
    LayoutModule
  ]
})
export class HomeModule { }
