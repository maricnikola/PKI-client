import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterLink} from "@angular/router";
import {MaterialModule} from "../infrastructure/material/material.module";



@NgModule({
    declarations: [
        HomeComponent,
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
