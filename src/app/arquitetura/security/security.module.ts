/* tslint:disable:ban-types */
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { SecurityGuard } from './security.guard';
import { SecurityService } from './security.service';
import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG, optionsConfig } from './config';

/**
 * Modulo responsável por encapsular os mecanismos de 'Segurança' necessários na aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
    SecurityGuard,
    SecurityService
  ],
  declarations: []
})
export class SecurityModule {

  public static forRoot(configValue?: optionsConfig): ModuleWithProviders<any> {
    return {
      ngModule: SecurityModule,
      providers: [
        {
          provide: NEW_CONFIG,
          useValue: configValue
        },
        {
          provide: INITIAL_CONFIG,
          useValue: initialConfig
        },
        {
          provide: config,
          useFactory: _configFactory,
          deps: [INITIAL_CONFIG, NEW_CONFIG]
        }
      ]
    };
  }
}

/**
 * @internal
 */
export function _configFactory(initConfig: optionsConfig, configValue: optionsConfig | (() => optionsConfig)): Function | optionsConfig {
  return (typeof configValue === 'function') ? configValue() : { ...initConfig, ...configValue };
}
