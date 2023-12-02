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

import { FuncionarioDto } from '../models/funcionario-dto';
import { Pageable } from '../models/pageable';
import { SearchField } from '../models/search-field';
import { SearchFieldValue } from '../models/search-field-value';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation funcionarioControllerObterPorId
   */
  static readonly FuncionarioControllerObterPorIdPath = '/api/v1/funcionario/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `funcionarioControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerAlterar
   */
  static readonly FuncionarioControllerAlterarPath = '/api/v1/funcionario/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerAlterar$Response(params: {
    id: number;
    body: FuncionarioDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `funcionarioControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerAlterar(params: {
    id: number;
    body: FuncionarioDto
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerRemover
   */
  static readonly FuncionarioControllerRemoverPath = '/api/v1/funcionario/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `funcionarioControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerListAll
   */
  static readonly FuncionarioControllerListAllPath = '/api/v1/funcionario';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `funcionarioControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerIncluir
   */
  static readonly FuncionarioControllerIncluirPath = '/api/v1/funcionario';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerIncluir$Response(params: {
    body: FuncionarioDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `funcionarioControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerIncluir(params: {
    body: FuncionarioDto
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerSearchFieldsList
   */
  static readonly FuncionarioControllerSearchFieldsListPath = '/api/v1/funcionario/search-fields';

  /**
   * Listagem dos campos de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerSearchFieldsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerSearchFieldsList$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SearchField>>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerSearchFieldsListPath, 'get');
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
   * To access the full response (for headers, for example), `funcionarioControllerSearchFieldsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerSearchFieldsList(params?: {
  },
  context?: HttpContext

): Observable<Array<SearchField>> {

    return this.funcionarioControllerSearchFieldsList$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SearchField>>) => r.body as Array<SearchField>)
    );
  }

  /**
   * Path part for operation funcionarioControllerSearchFieldsAction
   */
  static readonly FuncionarioControllerSearchFieldsActionPath = '/api/v1/funcionario/search-fields';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerSearchFieldsAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerSearchFieldsAction$Response(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerSearchFieldsActionPath, 'post');
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
   * To access the full response (for headers, for example), `funcionarioControllerSearchFieldsAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerSearchFieldsAction(params: {
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerSearchFieldsAction$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerSearchFieldsActionPage
   */
  static readonly FuncionarioControllerSearchFieldsActionPagePath = '/api/v1/funcionario/search-fields/page';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerSearchFieldsActionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerSearchFieldsActionPage$Response(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerSearchFieldsActionPagePath, 'post');
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
   * To access the full response (for headers, for example), `funcionarioControllerSearchFieldsActionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  funcionarioControllerSearchFieldsActionPage(params: {
    page?: number;
    size?: number;
    sort?: Array<string>;
    body: Array<SearchFieldValue>
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerSearchFieldsActionPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation funcionarioControllerListAllPage
   */
  static readonly FuncionarioControllerListAllPagePath = '/api/v1/funcionario/page';

  /**
   * Listagem Geral paginada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `funcionarioControllerListAllPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerListAllPage$Response(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FuncionarioControllerService.FuncionarioControllerListAllPagePath, 'get');
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
   * To access the full response (for headers, for example), `funcionarioControllerListAllPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  funcionarioControllerListAllPage(params: {
    page: Pageable;
  },
  context?: HttpContext

): Observable<any> {

    return this.funcionarioControllerListAllPage$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
