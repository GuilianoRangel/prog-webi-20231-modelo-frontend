import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {tipoRoutes} from "./pages/tipo/tipo-routing.module";

const routes: Routes = [
/*  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },*/
  {
    path: "",
    component: HomeComponent,
    children: [...tipoRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
