import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioResolve } from './usuario.resolve';
import { UsuarioClientService } from './usuario-client.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UsuarioClientService,
    UsuarioResolve
  ]
})
export class UsuarioClientModule { }
