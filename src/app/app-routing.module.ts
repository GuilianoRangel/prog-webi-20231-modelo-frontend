import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {tipoRoutes} from "./pages/tipo/tipo-routing.module";
import {AutenticacaoRoutes} from "./arquitetura/autenticacao/autenticacao.routing";
import {AdministracaoRoutes} from "./adminmodule/administracao.routing";
import {DocumentacaoComponent} from "./pages/documentacao/documentacao.component";
import {HomeSharedKeysComponent} from "./pages/home/home-shared-keys.component";
import {localRoutes} from "./pages/local/local-routing.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [...tipoRoutes, ...AdministracaoRoutes, ...localRoutes,
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeSharedKeysComponent
      },
      {
        path: "doc",
        component: DocumentacaoComponent,
      }]
  },
  {
    path: "acesso",
    children: [
      ...AutenticacaoRoutes
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
