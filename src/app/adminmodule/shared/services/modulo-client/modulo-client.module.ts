import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuloClientResolve} from './modulo-client.resolve';

/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ModuloClientResolve
  ]
})
export class ModuloClientModule {
}
