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

import { FiltroUsuarioDto } from '../models/filtro-usuario-dto';
import { UsuarioDto } from '../models/usuario-dto';


/**
 * Manutenção de usuários do sistema
 */
@Injectable({
  providedIn: 'root',
})
export class UsuarioApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUsuarioById
   */
  static readonly GetUsuarioByIdPath = '/api/v1/usuarios/{id}';

  /**
   * Recupera o usuario pela id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsuarioById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuarioById$Response(params: {

    /**
     * Id do Usuario
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UsuarioDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.GetUsuarioByIdPath, 'get');
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
        return r as StrictHttpResponse<UsuarioDto>;
      })
    );
  }

  /**
   * Recupera o usuario pela id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsuarioById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuarioById(params: {

    /**
     * Id do Usuario
     */
    id: number;
  },
  context?: HttpContext

): Observable<UsuarioDto> {

    return this.getUsuarioById$Response(params,context).pipe(
      map((r: StrictHttpResponse<UsuarioDto>) => r.body as UsuarioDto)
    );
  }

  /**
   * Path part for operation alterarUsuario
   */
  static readonly AlterarUsuarioPath = '/api/v1/usuarios/{id}';

  /**
   * Altera as informações de um Usuário na base de dados.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterarUsuario()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterarUsuario$Response(params: {

    /**
     * Código do Usuário
     */
    id: number;
    body: UsuarioDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UsuarioDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.AlterarUsuarioPath, 'put');
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
        return r as StrictHttpResponse<UsuarioDto>;
      })
    );
  }

  /**
   * Altera as informações de um Usuário na base de dados.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterarUsuario$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterarUsuario(params: {

    /**
     * Código do Usuário
     */
    id: number;
    body: UsuarioDto
  },
  context?: HttpContext

): Observable<UsuarioDto> {

    return this.alterarUsuario$Response(params,context).pipe(
      map((r: StrictHttpResponse<UsuarioDto>) => r.body as UsuarioDto)
    );
  }

  /**
   * Path part for operation inativarUsuario
   */
  static readonly InativarUsuarioPath = '/api/v1/usuarios/{id}/inativo';

  /**
   * Inativa o usuario.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inativarUsuario()` instead.
   *
   * This method doesn't expect any request body.
   */
  inativarUsuario$Response(params: {

    /**
     * Código do Usuário
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.InativarUsuarioPath, 'put');
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
   * Inativa o usuario.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inativarUsuario$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inativarUsuario(params: {

    /**
     * Código do Usuário
     */
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.inativarUsuario$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ativarUsuario
   */
  static readonly AtivarUsuarioPath = '/api/v1/usuarios/{id}/ativo';

  /**
   * Ativa o usuário.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ativarUsuario()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativarUsuario$Response(params: {

    /**
     * Código do Usuário
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.AtivarUsuarioPath, 'put');
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
   * Ativa o usuário.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ativarUsuario$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ativarUsuario(params: {

    /**
     * Código do Usuário
     */
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.ativarUsuario$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation incluirUsuario
   */
  static readonly IncluirUsuarioPath = '/api/v1/usuarios/';

  /**
   * Inclui um novo Usuário na base de dados.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluirUsuario()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirUsuario$Response(params: {
    body: UsuarioDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UsuarioDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.IncluirUsuarioPath, 'post');
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
        return r as StrictHttpResponse<UsuarioDto>;
      })
    );
  }

  /**
   * Inclui um novo Usuário na base de dados.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluirUsuario$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluirUsuario(params: {
    body: UsuarioDto
  },
  context?: HttpContext

): Observable<UsuarioDto> {

    return this.incluirUsuario$Response(params,context).pipe(
      map((r: StrictHttpResponse<UsuarioDto>) => r.body as UsuarioDto)
    );
  }

  /**
   * Path part for operation validarLoginUsuario
   */
  static readonly ValidarLoginUsuarioPath = '/api/v1/usuarios/{id}/login/valido/{login}';

  /**
   * Verifica se o Login informado é válido e se está em uso.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validarLoginUsuario()` instead.
   *
   * This method doesn't expect any request body.
   */
  validarLoginUsuario$Response(params: {

    /**
     * Código do Usuário
     */
    id: number;

    /**
     * LOGIN
     */
    login: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.ValidarLoginUsuarioPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('login', params.login, {});
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
   * Verifica se o Login informado é válido e se está em uso.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validarLoginUsuario$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validarLoginUsuario(params: {

    /**
     * Código do Usuário
     */
    id: number;

    /**
     * LOGIN
     */
    login: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.validarLoginUsuario$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getRelatorioGrupos2
   */
  static readonly GetRelatorioGrupos2Path = '/api/v1/usuarios/relatorio-usuarios';

  /**
   * Retorna Relatório de Grupos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRelatorioGrupos2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.GetRelatorioGrupos2Path, 'get');
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
   * To access the full response (for headers, for example), `getRelatorioGrupos2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos2(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.getRelatorioGrupos2$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getRelatorioGrupos
   */
  static readonly GetRelatorioGruposPath = '/api/v1/usuarios/relatorio-usuarios/{idGrupo}';

  /**
   * Retorna Relatório de Usuários.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRelatorioGrupos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos$Response(params: {

    /**
     * Código do Grupo
     */
    idGrupo: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.GetRelatorioGruposPath, 'get');
    if (params) {
      rb.path('idGrupo', params.idGrupo, {});
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
   * Retorna Relatório de Usuários.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRelatorioGrupos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRelatorioGrupos(params: {

    /**
     * Código do Grupo
     */
    idGrupo: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.getRelatorioGrupos$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation validarLogin
   */
  static readonly ValidarLoginPath = '/api/v1/usuarios/login/valido/{login}';

  /**
   * Verifica se o Login informado é válido e se está em uso.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validarLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  validarLogin$Response(params: {

    /**
     * LOGIN
     */
    login: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.ValidarLoginPath, 'get');
    if (params) {
      rb.path('login', params.login, {});
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
   * Verifica se o Login informado é válido e se está em uso.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validarLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validarLogin(params: {

    /**
     * LOGIN
     */
    login: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.validarLogin$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation inicializarDadosAdministrativos
   */
  static readonly InicializarDadosAdministrativosPath = '/api/v1/usuarios/inicializar/{senha}';

  /**
   * Carregar dados iniciais - sistema admin Module
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inicializarDadosAdministrativos()` instead.
   *
   * This method doesn't expect any request body.
   */
  inicializarDadosAdministrativos$Response(params: {

    /**
     * senha
     */
    senha: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.InicializarDadosAdministrativosPath, 'get');
    if (params) {
      rb.path('senha', params.senha, {});
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
   * Carregar dados iniciais - sistema admin Module
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inicializarDadosAdministrativos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inicializarDadosAdministrativos(params: {

    /**
     * senha
     */
    senha: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.inicializarDadosAdministrativos$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getUsuariosByFiltro
   */
  static readonly GetUsuariosByFiltroPath = '/api/v1/usuarios/filtro';

  /**
   * Recupera os usuarios pelo Filtro Informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsuariosByFiltro()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuariosByFiltro$Response(params: {

    /**
     * Filtro de pesquisa
     */
    filtroDTO: FiltroUsuarioDto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UsuarioDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.GetUsuariosByFiltroPath, 'get');
    if (params) {
      rb.query('filtroDTO', params.filtroDTO, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UsuarioDto>>;
      })
    );
  }

  /**
   * Recupera os usuarios pelo Filtro Informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsuariosByFiltro$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuariosByFiltro(params: {

    /**
     * Filtro de pesquisa
     */
    filtroDTO: FiltroUsuarioDto;
  },
  context?: HttpContext

): Observable<Array<UsuarioDto>> {

    return this.getUsuariosByFiltro$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UsuarioDto>>) => r.body as Array<UsuarioDto>)
    );
  }

  /**
   * Path part for operation getUsuariosAtivosByFiltro
   */
  static readonly GetUsuariosAtivosByFiltroPath = '/api/v1/usuarios/filtro-ativo';

  /**
   * Recupera os usuarios pelo Filtro Informado de usuários ativos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsuariosAtivosByFiltro()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuariosAtivosByFiltro$Response(params: {

    /**
     * Filtro de pesquisa
     */
    filtroDTO: FiltroUsuarioDto;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UsuarioDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioApiService.GetUsuariosAtivosByFiltroPath, 'get');
    if (params) {
      rb.query('filtroDTO', params.filtroDTO, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UsuarioDto>>;
      })
    );
  }

  /**
   * Recupera os usuarios pelo Filtro Informado de usuários ativos.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsuariosAtivosByFiltro$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsuariosAtivosByFiltro(params: {

    /**
     * Filtro de pesquisa
     */
    filtroDTO: FiltroUsuarioDto;
  },
  context?: HttpContext

): Observable<Array<UsuarioDto>> {

    return this.getUsuariosAtivosByFiltro$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UsuarioDto>>) => r.body as Array<UsuarioDto>)
    );
  }

}
