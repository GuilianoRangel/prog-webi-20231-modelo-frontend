import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GrupoUsuarioClientResolve} from './grupo-usuario-client.resolve';

/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GrupoUsuarioClientResolve
  ]
})
export class GrupoUsuarioClientModule {
}
