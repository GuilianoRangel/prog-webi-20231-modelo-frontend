import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {tipoRoutes} from "./pages/tipo/tipo-routing.module";
import {AutenticacaoRoutes} from "./arquitetura/autenticacao/autenticacao.routing";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [...tipoRoutes]
  },
  {
    path: "acesso",
    children: [
      ...AutenticacaoRoutes
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
