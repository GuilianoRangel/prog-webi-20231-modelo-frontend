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

import { DiscenteDto } from '../models/discente-dto';
import { Pageable } from '../models/pageable';
import { SearchField } from '../models/search-field';
import { SearchFieldValue } from '../models/search-field-value';

@Injectable({
  providedIn: 'root',
})
export class DiscenteControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation discenteControllerObterPorId
   */
  static readonly DiscenteControllerObterPorIdPath = '/api/v1/discente/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `discenteControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerAlterar
   */
  static readonly DiscenteControllerAlterarPath = '/api/v1/discente/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerAlterar$Response(params: {
    id: number;
    body: DiscenteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `discenteControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerAlterar(params: {
    id: number;
    body: DiscenteDto
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerRemover
   */
  static readonly DiscenteControllerRemoverPath = '/api/v1/discente/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `discenteControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerListAll
   */
  static readonly DiscenteControllerListAllPath = '/api/v1/discente';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `discenteControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerIncluir
   */
  static readonly DiscenteControllerIncluirPath = '/api/v1/discente';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerIncluir$Response(params: {
    body: DiscenteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `discenteControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerIncluir(params: {
    body: DiscenteDto
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerSearchFieldsList
   */
  static readonly DiscenteControllerSearchFieldsListPath = '/api/v1/discente/search-fields';

  /**
   * Listagem dos campos de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerSearchFieldsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerSearchFieldsList$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SearchField>>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerSearchFieldsListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SearchField>>;
      })
    );
  }

  /**
   * Listagem dos campos de busca
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `discenteControllerSearchFieldsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerSearchFieldsList(params?: {
  },
  context?: HttpContext

): Observable<Array<SearchField>> {

    return this.discenteControllerSearchFieldsList$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SearchField>>) => r.body as Array<SearchField>)
    );
  }

  /**
   * Path part for operation discenteControllerSearchFieldsAction
   */
  static readonly DiscenteControllerSearchFieldsActionPath = '/api/v1/discente/search-fields';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerSearchFieldsAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerSearchFieldsAction$Response(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerSearchFieldsActionPath, 'post');
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
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `discenteControllerSearchFieldsAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerSearchFieldsAction(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerSearchFieldsAction$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerSearchFieldsActionPage
   */
  static readonly DiscenteControllerSearchFieldsActionPagePath = '/api/v1/discente/search-fields/page';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerSearchFieldsActionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerSearchFieldsActionPage$Response(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerSearchFieldsActionPagePath, 'post');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
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
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `discenteControllerSearchFieldsActionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  discenteControllerSearchFieldsActionPage(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerSearchFieldsActionPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation discenteControllerListAllPage
   */
  static readonly DiscenteControllerListAllPagePath = '/api/v1/discente/page';

  /**
   * Listagem Geral paginada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discenteControllerListAllPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerListAllPage$Response(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscenteControllerService.DiscenteControllerListAllPagePath, 'get');
    if (params) {
      rb.query('page', params.page, {});
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
   * Listagem Geral paginada
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `discenteControllerListAllPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discenteControllerListAllPage(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<any> {

    return this.discenteControllerListAllPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
