import { Routes } from '@angular/router';
import {ListaLocalComponent} from "./lista/lista-local.component";
import {FormLocalComponent} from "./form/form-local.component";
import {GerenciarLocalComponent} from "./gerenciar-local/gerenciar-local.component";
import {UsuarioResolve} from "../../adminmodule/pages/usuario/shared/usuario-client/usuario.resolve";
import {LocalResolve} from "./shared/local-resolve.service";

export const localRoutes: Routes = [
  {
    path: 'local',
    children: [
      {
        path: 'listar',
        component: ListaLocalComponent
      },
      {
        path: 'incluir',
        component: FormLocalComponent,
        data: {
          acao: 'incluir'
        }
      },
      {
        path: ':id/alterar',
        component: FormLocalComponent,
        data: {
          acao: 'alterar'
        }
      },{
        path: ':id/gerenciar',
        component: GerenciarLocalComponent,
        resolve: {
          local: LocalResolve
        }
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }
    ]
  }
];

