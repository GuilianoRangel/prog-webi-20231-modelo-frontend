import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTipoComponent} from "./home-tipo/home-tipo.component";
import {ListTipoComponent} from "./list-tipo/list-tipo.component";
import {FormTipoComponent} from "./form-tipo/form-tipo.component";
import {SecurityGuard} from "../../arquitetura/security/security.guard";

export const tipoRoutes: Routes = [
  {
    path: "tipo",
    component: HomeTipoComponent,
    children: [
      {
        path: "",
        component: ListTipoComponent,
        canActivate: [SecurityGuard],
        data: {security: {roles: ['ROLE_USUARIO_VISUALIZAR']}}
      },
      {
        path: "novo",
        component: FormTipoComponent
      },
      {
        path: ":codigo",
        component: FormTipoComponent
      }
    ]
  }
];

