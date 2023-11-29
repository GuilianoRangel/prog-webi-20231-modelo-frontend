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

import { Pageable } from '../models/pageable';
import { SearchField } from '../models/search-field';
import { SearchFieldValue } from '../models/search-field-value';
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
   * Path part for operation tipoControllerObterPorId
   */
  static readonly TipoControllerObterPorIdPath = '/api/v1/tipo/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `tipoControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerAlterar
   */
  static readonly TipoControllerAlterarPath = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerAlterar$Response(params: {
    id: number;
    body: TipoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `tipoControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerAlterar(params: {
    id: number;
    body: TipoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerRemover
   */
  static readonly TipoControllerRemoverPath = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `tipoControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerDesativarTipo
   */
  static readonly TipoControllerDesativarTipoPath = '/api/v1/tipo/{id}';

  /**
   * Método utilizado para desativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerDesativarTipo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerDesativarTipo$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerDesativarTipoPath, 'patch');
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
   * To access the full response (for headers, for example), `tipoControllerDesativarTipo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerDesativarTipo(params: {
    id: number;
  },
  context?: HttpContext

): Observable<TipoDto> {

    return this.tipoControllerDesativarTipo$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDto>) => r.body as TipoDto)
    );
  }

  /**
   * Path part for operation tipoControllerListAll
   */
  static readonly TipoControllerListAllPath = '/api/v1/tipo';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `tipoControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerIncluir
   */
  static readonly TipoControllerIncluirPath = '/api/v1/tipo';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerIncluir$Response(params: {
    body: TipoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `tipoControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerIncluir(params: {
    body: TipoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerSearchFieldsList
   */
  static readonly TipoControllerSearchFieldsListPath = '/api/v1/tipo/search-fields';

  /**
   * Listagem dos campos de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerSearchFieldsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerSearchFieldsList$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SearchField>>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerSearchFieldsListPath, 'get');
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
   * To access the full response (for headers, for example), `tipoControllerSearchFieldsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerSearchFieldsList(params?: {
  },
  context?: HttpContext

): Observable<Array<SearchField>> {

    return this.tipoControllerSearchFieldsList$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SearchField>>) => r.body as Array<SearchField>)
    );
  }

  /**
   * Path part for operation tipoControllerSearchFieldsAction
   */
  static readonly TipoControllerSearchFieldsActionPath = '/api/v1/tipo/search-fields';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerSearchFieldsAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerSearchFieldsAction$Response(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerSearchFieldsActionPath, 'post');
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
   * To access the full response (for headers, for example), `tipoControllerSearchFieldsAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerSearchFieldsAction(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerSearchFieldsAction$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerSearchFieldsActionPage
   */
  static readonly TipoControllerSearchFieldsActionPagePath = '/api/v1/tipo/search-fields/page';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerSearchFieldsActionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerSearchFieldsActionPage$Response(params: {
    body: {
'searchFieldValues'?: Array<SearchFieldValue>;
'page'?: Pageable;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerSearchFieldsActionPagePath, 'post');
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
   * To access the full response (for headers, for example), `tipoControllerSearchFieldsActionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tipoControllerSearchFieldsActionPage(params: {
    body: {
'searchFieldValues'?: Array<SearchFieldValue>;
'page'?: Pageable;
}
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerSearchFieldsActionPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tipoControllerAtivarTipo
   */
  static readonly TipoControllerAtivarTipoPath = '/api/v1/tipo/{id}/ativar';

  /**
   * Método utilizado para ativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerAtivarTipo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerAtivarTipo$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerAtivarTipoPath, 'patch');
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
   * To access the full response (for headers, for example), `tipoControllerAtivarTipo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerAtivarTipo(params: {
    id: number;
  },
  context?: HttpContext

): Observable<TipoDto> {

    return this.tipoControllerAtivarTipo$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDto>) => r.body as TipoDto)
    );
  }

  /**
   * Path part for operation tipoControllerListAllPage
   */
  static readonly TipoControllerListAllPagePath = '/api/v1/tipo/page';

  /**
   * Listagem Geral paginada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tipoControllerListAllPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerListAllPage$Response(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TipoControllerService.TipoControllerListAllPagePath, 'get');
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
   * To access the full response (for headers, for example), `tipoControllerListAllPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tipoControllerListAllPage(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<any> {

    return this.tipoControllerListAllPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
