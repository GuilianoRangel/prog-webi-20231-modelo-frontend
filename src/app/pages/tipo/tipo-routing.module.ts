import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTipoComponent} from "./home-tipo/home-tipo.component";
import {ListTipoComponent} from "./list-tipo/list-tipo.component";
import {FormTipoComponent} from "./form-tipo/form-tipo.component";

export const tipoRoutes: Routes = [
  {
    path: "tipo",
    component: HomeTipoComponent,
    children: [
      {
        path: "",
        component: ListTipoComponent
      },
      {
        path: "novo",
        component: FormTipoComponent
      },
      {
        path: "edit/:id",
        component: FormTipoComponent
      }
    ]
  }
];

