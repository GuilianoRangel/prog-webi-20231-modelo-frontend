import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layouts/material.module';


import { OrderModule } from 'ngx-order-pipe';
import { UsuarioRoutes } from './usuario.routing';
import { ValidationModule } from '../../shared/validation/validation.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioClientModule } from './shared/usuario-client/usuario-client.module';
import { UsuarioTelefoneFormComponent } from './usuario-telefone-form/usuario-telefone-form.component';
import {MessageModule} from "../../../arquitetura/message/message.module";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent,
    UsuarioTelefoneFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MessageModule,
    MaterialModule,
    ValidationModule,
    UsuarioClientModule,
    NgxMaskDirective, NgxMaskPipe,
    RouterModule.forChild(UsuarioRoutes),
    NgxMaskPipe
  ],
  providers: [provideNgxMask()]
})
export class UsuarioModule { }
