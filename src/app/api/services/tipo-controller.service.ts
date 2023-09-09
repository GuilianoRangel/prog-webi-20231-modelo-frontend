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

import { TipoDto } from '../models/tipo-dto';

@Injectable({
  providedIn: 'root',
})
export class TipoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation obterPorId
   */
  static readonly ObterPorIdPath = '/api/v1/tipo/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.ObterPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.obterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation alterar1
   */
  static readonly Alterar1Path = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar1$Response(params: {
    id: number;
    body: TipoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.Alterar1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar1(params: {
    id: number;
    body: TipoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.alterar1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remover
   */
  static readonly RemoverPath = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remover()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.RemoverPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `remover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.remover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation desativar
   */
  static readonly DesativarPath = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para desativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `desativar()` instead.
   *
   * This method doesn't expect any request body.
   */
  desativar$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.DesativarPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoDto>;
      })
    );
  }

  /**
   * Método utilizado para desativar Tipo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `desativar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  desativar(params: {
    id: number;
  },
  context?: HttpContext

): Observable<TipoDto> {

    return this.desativar$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDto>) => r.body as TipoDto)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/api/v1/tipo';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Listagem Geral
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation incluir1
   */
  static readonly Incluir1Path = '/api/v1/tipo';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir1$Response(params: {
    body: TipoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.Incluir1Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir1(params: {
    body: TipoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.incluir1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ativar2
   */
  static readonly Ativar2Path = '/api/v1/tipo/{id}/ativar';

  /**
   * Método utilizado para ativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ativar2()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativar2$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.Ativar2Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoDto>;
      })
    );
  }

  /**
   * Método utilizado para ativar Tipo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ativar2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativar2(params: {
    id: number;
  },
  context?: HttpContext

): Observable<TipoDto> {

    return this.ativar2$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDto>) => r.body as TipoDto)
    );
  }

}
