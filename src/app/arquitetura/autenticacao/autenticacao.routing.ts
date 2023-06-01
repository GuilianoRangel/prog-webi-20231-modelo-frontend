import { AutenticacaoComponent } from './autenticacao.component';
import { Routes } from '@angular/router';

export const AutenticacaoRoutes: Routes = [

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: AutenticacaoComponent,
        //loadChildren: () => import('./autenticacao.module').then(m => m.AutenticacaoModule)
      },
  ];

