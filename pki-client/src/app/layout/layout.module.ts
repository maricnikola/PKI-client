import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterLink} from "@angular/router";
import {MaterialModule} from "../infrastructure/material/material.module";
import {CertificatesModule} from "../certificates/certificates.module";



@NgModule({
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule
  ]
})
export class LayoutModule { }
