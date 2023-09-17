import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {localRoutes} from "./local-routing.module";
import {MaterialModule} from "../../core/material.module";
import {ListaLocalComponent} from './lista/lista-local.component';
import {MessageModule} from "../../arquitetura/message/message.module";
import {FormLocalComponent} from './form/form-local.component';
import {ValidationModule} from "../../adminmodule/shared/validation/validation.module";
import {GerenciarLocalComponent} from './gerenciar-local/gerenciar-local.component';
import {LocalResolve} from "./shared/local-resolve.service";
import {TipoModule} from "../tipo/tipo.module";
import {ChaveComponent} from "./gerenciar-local/chave/chave.component";
import {ChaveDialogComponent} from './gerenciar-local/chave/chave-dialog/chave-dialog.component';


@NgModule({
  declarations: [
    ListaLocalComponent,
    FormLocalComponent,
    GerenciarLocalComponent,
    ChaveComponent,
    ChaveDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(localRoutes),
    ValidationModule,
    TipoModule
  ],
  exports: [
    ChaveComponent
  ],
  providers: [
    LocalResolve
  ]
})
export class LocalModule { }
