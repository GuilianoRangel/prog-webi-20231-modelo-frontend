import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AdministracaoComponent} from './administracao.component';
import {MessageModule} from "../arquitetura/message/message.module";
import {MaterialModule} from "./layouts/material.module";
import {ModuloClientModule} from "./shared/services/modulo-client/modulo-client.module";
import {GrupoUsuarioClientModule} from "./shared/services/grupo-usuario-client/grupo-usuario-client.module";
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';



/**
 * Módulo responsável por prover o template padrão das interfaces principais.
 *
 * @author Guiliano Rangel (UEG)
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        MessageModule,
        //BsDropdownModule,
        FlexLayoutModule,
        ModuloClientModule,
        GrupoUsuarioClientModule,
        MaterialModule,
        //AngularFontAwesomeModule
    ],
  declarations: [
    AdministracaoComponent,
    AdminHomeComponent
  ]
})
export class AdministracaoModule { }
