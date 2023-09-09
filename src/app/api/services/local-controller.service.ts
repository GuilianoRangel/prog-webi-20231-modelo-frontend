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

import { LocalDto } from '../models/local-dto';

@Injectable({
  providedIn: 'root',
})
export class LocalControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation localControllerObterPorId
   */
  static readonly LocalControllerObterPorIdPath = '/api/v1/local/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `localControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerAlterar
   */
  static readonly LocalControllerAlterarPath = '/api/v1/local/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerAlterar$Response(params: {
    id: number;
    body: LocalDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `localControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerAlterar(params: {
    id: number;
    body: LocalDto
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerRemover
   */
  static readonly LocalControllerRemoverPath = '/api/v1/local/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `localControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerObterPorId_1
   */
  static readonly LocalControllerObterPorId_1Path = '/api/v1/local/hash/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerObterPorId_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerObterPorId_1$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerObterPorId_1Path, 'get');
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
   * To access the full response (for headers, for example), `localControllerObterPorId_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerObterPorId_1(params: {
    id: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerObterPorId_1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerAlterar_1
   */
  static readonly LocalControllerAlterar_1Path = '/api/v1/local/hash/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerAlterar_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerAlterar_1$Response(params: {
    id: string;
    body: LocalDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerAlterar_1Path, 'put');
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
   * To access the full response (for headers, for example), `localControllerAlterar_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerAlterar_1(params: {
    id: string;
    body: LocalDto
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerAlterar_1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerRemover_1
   */
  static readonly LocalControllerRemover_1Path = '/api/v1/local/hash/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerRemover_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerRemover_1$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerRemover_1Path, 'delete');
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
   * To access the full response (for headers, for example), `localControllerRemover_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerRemover_1(params: {
    id: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerRemover_1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerListAll
   */
  static readonly LocalControllerListAllPath = '/api/v1/local';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `localControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation localControllerIncluir
   */
  static readonly LocalControllerIncluirPath = '/api/v1/local';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerIncluir$Response(params: {
    body: LocalDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, LocalControllerService.LocalControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `localControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  localControllerIncluir(params: {
    body: LocalDto
  },
  context?: HttpContext

): Observable<any> {

    return this.localControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
