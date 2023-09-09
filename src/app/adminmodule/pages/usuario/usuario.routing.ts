import { Routes } from '@angular/router';

import { UsuarioResolve } from './shared/usuario-client/usuario.resolve';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import {SecurityGuard} from "../../../arquitetura/security/security.guard";

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const UsuarioRoutes: Routes = [
  {
    path: 'incluir',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_USUARIO_INCLUIR'
        ]
      }
    },
    resolve: {
      // sistemas: SistemaAtivoResolve
    }
  },
  {
    path: 'listar',
    component: UsuarioListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_USUARIO_PESQUISAR'
        ]
      }
    }
  },
  {
    path: ':id/alterar',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_USUARIO_ALTERAR'
        ]
      }
    },
    resolve: {
      usuario: UsuarioResolve,
      // sistemas: SistemaAtivoResolve
    }
  },
  {
    path: ':id/visualizar',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_USUARIO_VISUALIZAR'
        ]
      }
    },
    resolve: {
      usuario: UsuarioResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
