/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ModuloSistemaDto } from '../models/modulo-sistema-dto';


/**
 * Informações dos Modulos do Sistema
 */
@Injectable({
  providedIn: 'root',
})
export class ModuloSistemaApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getModulosAtivos
   */
  static readonly GetModulosAtivosPath = '/api/v1/modulos/modulo/ativos';

  /**
   * Retorna uma lista de Módulos ativos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getModulosAtivos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getModulosAtivos$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ModuloSistemaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ModuloSistemaApiService.GetModulosAtivosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ModuloSistemaDto>>;
      })
    );
  }

  /**
   * Retorna uma lista de Módulos ativos.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getModulosAtivos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getModulosAtivos(params?: {
  },
  context?: HttpContext

): Observable<Array<ModuloSistemaDto>> {

    return this.getModulosAtivos$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ModuloSistemaDto>>) => r.body as Array<ModuloSistemaDto>)
    );
  }

}
