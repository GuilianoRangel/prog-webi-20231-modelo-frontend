import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAmigoComponent} from "./home-amigo/home-amigo.component";
import {ListAmigoComponent} from "./list-amigo/list-amigo.component";
import {FormAmigoComponent} from "./form-amigo/form-amigo.component";
import {SecurityGuard} from "../../arquitetura/security/security.guard";
import {TipoResolve} from "./shared/tipo-resolve.service";

export const AmigoRoutes: Routes = [
  {
    path: "amigo",
    component: HomeAmigoComponent,
    children: [
      {
        path: "",
        component: ListAmigoComponent,
        canActivate: [SecurityGuard],
        data: {security: {roles: ['ROLE_USUARIO_VISUALIZAR']}}
      },
      {
        path: "novo",
        component: FormAmigoComponent,
        resolve:{
          tipos: TipoResolve
        }
      },
      {
        path: ":codigo",
        component: FormAmigoComponent,
        resolve:{
          tipos: TipoResolve
        }
      }
    ]
  }
];

