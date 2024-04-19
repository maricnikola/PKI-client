import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[
    LogInComponent
  ]
})
export class AuthModule { }
