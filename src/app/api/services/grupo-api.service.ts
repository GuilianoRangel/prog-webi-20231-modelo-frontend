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

import { FiltroGrupoDto } from '../models/filtro-grupo-dto';
import { GrupoDto } from '../models/grupo-dto';
import { GrupoEstatisticasDto } from '../models/grupo-estatisticas-dto';


/**
 * Manutenção de Grupos de usuários
 */
@Injectable({
  providedIn: 'root',
})
export class GrupoApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getGrupoById
   */
  static readonly GetGrupoByIdPath = '/api/v1/grupos/{id}';

  /**
   * Retorna as informações do Grupo pelo id informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGrupoById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGrupoById$Response(params: {

    /**
     * Código do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GrupoDto>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetGrupoByIdPath, 'get');
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
        return r as StrictHttpResponse<GrupoDto>;
      })
    );
  }

  /**
   * Retorna as informações do Grupo pelo id informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGrupoById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGrupoById(params: {

    /**
     * Código do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<GrupoDto> {

    return this.getGrupoById$Response(params,context).pipe(
      map((r: StrictHttpResponse<GrupoDto>) => r.body as GrupoDto)
    );
  }

  /**
   * Path part for operation alterarGrupo
   */
  static readonly AlterarGrupoPath = '/api/v1/grupos/{id}';

  /**
   * Altera as informações de Grupo.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterarGrupo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterarGrupo$Response(params: {

    /**
     * Código do Sistema
     */
    id: number;
    body: GrupoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GrupoDto>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.AlterarGrupoPath, 'put');
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
        return r as StrictHttpResponse<GrupoDto>;
      })
    );
  }

  /**
   * Altera as informações de Grupo.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterarGrupo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterarGrupo(params: {

    /**
     * Código do Sistema
     */
    id: number;
    body: GrupoDto
  },
  context?: HttpContext

): Observable<GrupoDto> {

    return this.alterarGrupo$Response(params,context).pipe(
      map((r: StrictHttpResponse<GrupoDto>) => r.body as GrupoDto)
    );
  }

  /**
   * Path part for operation inativarGrupo
   */
  static readonly InativarGrupoPath = '/api/v1/grupos/{id}/inativo';

  /**
   * Inativa o Grupo pelo id informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inativarGrupo()` instead.
   *
   * This method doesn't expect any request body.
   */
  inativarGrupo$Response(params: {

    /**
     * Id do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.InativarGrupoPath, 'put');
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
   * Inativa o Grupo pelo id informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inativarGrupo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inativarGrupo(params: {

    /**
     * Id do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.inativarGrupo$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ativarGrupo
   */
  static readonly AtivarGrupoPath = '/api/v1/grupos/{id}/ativo';

  /**
   * Ativa o Grupo pelo id informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ativarGrupo()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativarGrupo$Response(params: {

    /**
     * Id do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.AtivarGrupoPath, 'put');
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
   * Ativa o Grupo pelo id informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ativarGrupo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativarGrupo(params: {

    /**
     * Id do Grupo
     */
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.ativarGrupo$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getGrupos
   */
  static readonly GetGruposPath = '/api/v1/grupos';

  /**
   * Retorna uma lista de Grupos cadastrados.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGrupos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGrupos$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GrupoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetGruposPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoDto>>;
      })
    );
  }

  /**
   * Retorna uma lista de Grupos cadastrados.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGrupos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGrupos(params?: {
  },
  context?: HttpContext

): Observable<Array<GrupoDto>> {

    return this.getGrupos$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GrupoDto>>) => r.body as Array<GrupoDto>)
    );
  }

  /**
   * Path part for operation incluirGrupo
   */
  static readonly IncluirGrupoPath = '/api/v1/grupos';

  /**
   * Incluir grupo de acesso.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluirGrupo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirGrupo$Response(params: {
    body: GrupoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GrupoDto>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.IncluirGrupoPath, 'post');
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
        return r as StrictHttpResponse<GrupoDto>;
      })
    );
  }

  /**
   * Incluir grupo de acesso.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluirGrupo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirGrupo(params: {
    body: GrupoDto
  },
  context?: HttpContext

): Observable<GrupoDto> {

    return this.incluirGrupo$Response(params,context).pipe(
      map((r: StrictHttpResponse<GrupoDto>) => r.body as GrupoDto)
    );
  }

  /**
   * Path part for operation getGruposByUsuarioLogado
   */
  static readonly GetGruposByUsuarioLogadoPath = '/api/v1/grupos/user';

  /**
   * Recupera os grupos pelo usuário logado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGruposByUsuarioLogado()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposByUsuarioLogado$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GrupoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetGruposByUsuarioLogadoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoDto>>;
      })
    );
  }

  /**
   * Recupera os grupos pelo usuário logado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGruposByUsuarioLogado$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposByUsuarioLogado(params?: {
  },
  context?: HttpContext

): Observable<Array<GrupoDto>> {

    return this.getGruposByUsuarioLogado$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GrupoDto>>) => r.body as Array<GrupoDto>)
    );
  }

  /**
   * Path part for operation getRelatorioGrupos1
   */
  static readonly GetRelatorioGrupos1Path = '/api/v1/grupos/relatorio-usuarios';

  /**
   * Retorna Relatório de Grupos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRelatorioGrupos1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetRelatorioGrupos1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/pdf',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Retorna Relatório de Grupos.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRelatorioGrupos1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos1(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.getRelatorioGrupos1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getGruposAtivos
   */
  static readonly GetGruposAtivosPath = '/api/v1/grupos/grupo/ativos';

  /**
   * Retorna uma lista de Grupos ativos conforme o 'id' do Sistema informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGruposAtivos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposAtivos$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GrupoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetGruposAtivosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoDto>>;
      })
    );
  }

  /**
   * Retorna uma lista de Grupos ativos conforme o 'id' do Sistema informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGruposAtivos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposAtivos(params?: {
  },
  context?: HttpContext

): Observable<Array<GrupoDto>> {

    return this.getGruposAtivos$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GrupoDto>>) => r.body as Array<GrupoDto>)
    );
  }

  /**
   * Path part for operation getAllGrupoByFiltro
   */
  static readonly GetAllGrupoByFiltroPath = '/api/v1/grupos/filtro';

  /**
   * Recupera as informações de Grupo conforme dados informados no filtro de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllGrupoByFiltro()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGrupoByFiltro$Response(params: {

    /**
     * Filtro de pesquisa
     */
    filtroGrupoDTO: FiltroGrupoDto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GrupoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetAllGrupoByFiltroPath, 'get');
    if (params) {
      rb.query('filtroGrupoDTO', params.filtroGrupoDTO, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoDto>>;
      })
    );
  }

  /**
   * Recupera as informações de Grupo conforme dados informados no filtro de busca
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllGrupoByFiltro$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGrupoByFiltro(params: {

    /**
     * Filtro de pesquisa
     */
    filtroGrupoDTO: FiltroGrupoDto;
  },
  context?: HttpContext

): Observable<Array<GrupoDto>> {

    return this.getAllGrupoByFiltro$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GrupoDto>>) => r.body as Array<GrupoDto>)
    );
  }

  /**
   * Path part for operation getGruposEstatisticas
   */
  static readonly GetGruposEstatisticasPath = '/api/v1/grupos/estatisticas';

  /**
   * Retorna Estatisticas de Usuários pro grupo.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGruposEstatisticas()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposEstatisticas$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GrupoEstatisticasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GrupoApiService.GetGruposEstatisticasPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoEstatisticasDto>>;
      })
    );
  }

  /**
   * Retorna Estatisticas de Usuários pro grupo.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGruposEstatisticas$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGruposEstatisticas(params?: {
  },
  context?: HttpContext

): Observable<Array<GrupoEstatisticasDto>> {

    return this.getGruposEstatisticas$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GrupoEstatisticasDto>>) => r.body as Array<GrupoEstatisticasDto>)
    );
  }

}
