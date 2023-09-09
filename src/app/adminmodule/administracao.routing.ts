import { Routes } from '@angular/router';
import {AdministracaoComponent} from './administracao.component';
import {HomeComponent} from "../core/home/home.component";
import {SecurityGuard} from "../arquitetura/security/security.guard";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";

/**
 * Configuração de 'Rotas' do módulo 'Home'.
 *
 * @author Guiliano Rangel (UEG)
 */
export const AdministracaoRoutes: Routes = [
  {
    path: 'administracao',
    component: AdministracaoComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_GRUPO_INCLUIR',
          'ROLE_GRUPO_ALTERAR',
          'ROLE_GRUPO_PESQUISAR',
          'ROLE_GRUPO_VISUALIZAR',
          'ROLE_GRUPO_ATIVAR_INATIVAR',
          'ROLE_USUARIO_PESQUISAR',
          'ROLE_USUARIO_INCLUIR',
          'ROLE_USUARIO_VISUALIZAR',
          'ROLE_USUARIO_ATIVAR_INATIVAR',
          'ROLE_USUARIO_VINCULAR_GRUPO',
        ]
      }
    },
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'grupo',  loadChildren: () => import('./pages/grupo/grupo.module').then(m => m.GrupoModule)
      },
      {
        path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)
      },
    ]
  }
];
