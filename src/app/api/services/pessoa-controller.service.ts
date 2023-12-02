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
import { PessoaDto } from '../models/pessoa-dto';
import { SearchField } from '../models/search-field';
import { SearchFieldValue } from '../models/search-field-value';

@Injectable({
  providedIn: 'root',
})
export class PessoaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation pessoaControllerObterPorId
   */
  static readonly PessoaControllerObterPorIdPath = '/api/v1/pessoa/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `pessoaControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerAlterar
   */
  static readonly PessoaControllerAlterarPath = '/api/v1/pessoa/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerAlterar$Response(params: {
    id: number;
    body: PessoaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `pessoaControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerAlterar(params: {
    id: number;
    body: PessoaDto
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerRemover
   */
  static readonly PessoaControllerRemoverPath = '/api/v1/pessoa/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `pessoaControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerListAll
   */
  static readonly PessoaControllerListAllPath = '/api/v1/pessoa';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `pessoaControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerIncluir
   */
  static readonly PessoaControllerIncluirPath = '/api/v1/pessoa';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerIncluir$Response(params: {
    body: PessoaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `pessoaControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerIncluir(params: {
    body: PessoaDto
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerSearchFieldsList
   */
  static readonly PessoaControllerSearchFieldsListPath = '/api/v1/pessoa/search-fields';

  /**
   * Listagem dos campos de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerSearchFieldsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerSearchFieldsList$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SearchField>>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerSearchFieldsListPath, 'get');
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
   * To access the full response (for headers, for example), `pessoaControllerSearchFieldsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerSearchFieldsList(params?: {
  },
  context?: HttpContext

): Observable<Array<SearchField>> {

    return this.pessoaControllerSearchFieldsList$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SearchField>>) => r.body as Array<SearchField>)
    );
  }

  /**
   * Path part for operation pessoaControllerSearchFieldsAction
   */
  static readonly PessoaControllerSearchFieldsActionPath = '/api/v1/pessoa/search-fields';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerSearchFieldsAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerSearchFieldsAction$Response(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerSearchFieldsActionPath, 'post');
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
   * To access the full response (for headers, for example), `pessoaControllerSearchFieldsAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerSearchFieldsAction(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerSearchFieldsAction$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerSearchFieldsActionPage
   */
  static readonly PessoaControllerSearchFieldsActionPagePath = '/api/v1/pessoa/search-fields/page';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerSearchFieldsActionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerSearchFieldsActionPage$Response(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerSearchFieldsActionPagePath, 'post');
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
   * To access the full response (for headers, for example), `pessoaControllerSearchFieldsActionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pessoaControllerSearchFieldsActionPage(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerSearchFieldsActionPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pessoaControllerListAllPage
   */
  static readonly PessoaControllerListAllPagePath = '/api/v1/pessoa/page';

  /**
   * Listagem Geral paginada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pessoaControllerListAllPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerListAllPage$Response(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PessoaControllerService.PessoaControllerListAllPagePath, 'get');
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
   * To access the full response (for headers, for example), `pessoaControllerListAllPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pessoaControllerListAllPage(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<any> {

    return this.pessoaControllerListAllPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
