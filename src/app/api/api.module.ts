/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UsuarioApiService } from './services/usuario-api.service';
import { TipoControllerService } from './services/tipo-controller.service';
import { LocalControllerService } from './services/local-controller.service';
import { GrupoApiService } from './services/grupo-api.service';
import { AuthApiService } from './services/auth-api.service';
import { AmigoControllerService } from './services/amigo-controller.service';
import { ModuloSistemaApiService } from './services/modulo-sistema-api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UsuarioApiService,
    TipoControllerService,
    LocalControllerService,
    GrupoApiService,
    AuthApiService,
    AmigoControllerService,
    ModuloSistemaApiService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
