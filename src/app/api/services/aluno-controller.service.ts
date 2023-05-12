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

import { AlunoDto } from '../models/aluno-dto';
import { AlunoDadosAlteravelDto } from '../models/aluno-dados-alteravel-dto';
import { AlunoListaDto } from '../models/aluno-lista-dto';

@Injectable({
  providedIn: 'root',
})
export class AlunoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation obterPorId3
   */
  static readonly ObterPorId3Path = '/api/v1/aluno/{id}';

  /**
   * Obter os dados completos de um aluno pela matricula(id) informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obterPorId3()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId3$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlunoDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.ObterPorId3Path, 'get');
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
        return r as StrictHttpResponse<AlunoDto>;
      })
    );
  }

  /**
   * Obter os dados completos de um aluno pela matricula(id) informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obterPorId3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId3(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlunoDto> {

    return this.obterPorId3$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlunoDto>) => r.body as AlunoDto)
    );
  }

  /**
   * Path part for operation alterar3
   */
  static readonly Alterar3Path = '/api/v1/aluno/{id}';

  /**
   * Método utilizado para altlerar os dados de um aluno
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar3$Response(params: {
    id: number;
    body: AlunoDadosAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlunoDadosAlteravelDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.Alterar3Path, 'put');
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
        return r as StrictHttpResponse<AlunoDadosAlteravelDto>;
      })
    );
  }

  /**
   * Método utilizado para altlerar os dados de um aluno
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar3(params: {
    id: number;
    body: AlunoDadosAlteravelDto
  },
  context?: HttpContext

): Observable<AlunoDadosAlteravelDto> {

    return this.alterar3$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlunoDadosAlteravelDto>) => r.body as AlunoDadosAlteravelDto)
    );
  }

  /**
   * Path part for operation remover3
   */
  static readonly Remover3Path = '/api/v1/aluno/{id}';

  /**
   * Método utililzado para remover um aluno pela Matricula informada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remover3()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover3$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.Remover3Path, 'delete');
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
   * Método utililzado para remover um aluno pela Matricula informada
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `remover3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover3(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.remover3$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listAll2
   */
  static readonly ListAll2Path = '/api/v1/aluno';

  /**
   * Listagem Geral de alunos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlunoListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.ListAll2Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlunoListaDto>>;
      })
    );
  }

  /**
   * Listagem Geral de alunos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll2(params?: {
  },
  context?: HttpContext

): Observable<Array<AlunoListaDto>> {

    return this.listAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlunoListaDto>>) => r.body as Array<AlunoListaDto>)
    );
  }

  /**
   * Path part for operation incluir2
   */
  static readonly Incluir2Path = '/api/v1/aluno';

  /**
   * Método utilizado para realizar a inclusão de um aluno
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir2$Response(params: {
    body: AlunoDadosAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlunoDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.Incluir2Path, 'post');
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
        return r as StrictHttpResponse<AlunoDto>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de um aluno
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir2(params: {
    body: AlunoDadosAlteravelDto
  },
  context?: HttpContext

): Observable<AlunoDto> {

    return this.incluir2$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlunoDto>) => r.body as AlunoDto)
    );
  }

  /**
   * Path part for operation pesquisar
   */
  static readonly PesquisarPath = '/api/v1/aluno/pesquisar';

  /**
   * Busca alunos pelos dados informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pesquisar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pesquisar$Response(params: {
    body: AlunoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlunoListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.PesquisarPath, 'post');
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
        return r as StrictHttpResponse<Array<AlunoListaDto>>;
      })
    );
  }

  /**
   * Busca alunos pelos dados informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pesquisar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pesquisar(params: {
    body: AlunoDto
  },
  context?: HttpContext

): Observable<Array<AlunoListaDto>> {

    return this.pesquisar$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlunoListaDto>>) => r.body as Array<AlunoListaDto>)
    );
  }

  /**
   * Path part for operation cancelar
   */
  static readonly CancelarPath = '/api/v1/aluno/{id}/cancelar-matricula';

  /**
   * Cancela a matricula de um aluno
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelar()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelar$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlunoDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlunoControllerService.CancelarPath, 'patch');
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
        return r as StrictHttpResponse<AlunoDto>;
      })
    );
  }

  /**
   * Cancela a matricula de um aluno
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelar(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlunoDto> {

    return this.cancelar$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlunoDto>) => r.body as AlunoDto)
    );
  }

}
