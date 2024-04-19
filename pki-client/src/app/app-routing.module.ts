import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./infrastructure/auth/log-in/log-in.component";
import {UnauthorizedGuard} from "./infrastructure/auth/guard/unauthorized.guard";
import {HomeComponent} from "./layout/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LogInComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
