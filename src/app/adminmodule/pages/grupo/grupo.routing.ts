import {Routes} from '@angular/router';

import {GrupoResolve} from './shared/grupo-client/grupo.resolve';
import {GrupoFormComponent} from './grupo-form/grupo-form.component';
import {GrupoListComponent} from './grupo-list/grupo-list.component';
import {GrupoStatsComponent} from './grupo-stats/grupo-stats.component';
import {GrupoStatsResolve} from './shared/grupo-client/grupo-stats.resolve';
import {SecurityGuard} from "../../../arquitetura/security/security.guard";
import {ModuloClientResolve} from "../../shared/services/modulo-client/modulo-client.resolve";

/**
 * Configurações de rota de Grupo.
 *
 * @author Guiliano Rangel (UEG)
 */
export const GrupoRoutes: Routes = [
  {
    path: 'incluir',
    component: GrupoFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_GRUPO_INCLUIR'
        ]
      }
    },
  },
  {
    path: ':id/alterar',
    component: GrupoFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_GRUPO_ALTERAR'
        ]
      }
    },
    resolve: {
      grupo: GrupoResolve
    }
  },
  {
    path: 'listar',
    component: GrupoListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_GRUPO_PESQUISAR'
        ]
      }
    },
    resolve: {
      // grupos: GruposAtivosResolve,
      modulos: ModuloClientResolve
    }
  },
  {
    path: 'estatisticas',
    component: GrupoStatsComponent,
    resolve: {
      grupoEstatitisticas: GrupoStatsResolve
    }
  },
  {
    path: ':id/visualizar',
    component: GrupoFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_GRUPO_VISUALIZAR'
        ]
      }
    },
    resolve: {
      grupo: GrupoResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
