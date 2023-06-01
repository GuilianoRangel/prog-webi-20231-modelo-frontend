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

import { AuthDto } from '../models/auth-dto';
import { CredencialDto } from '../models/credencial-dto';
import { UsuarioSenhaDto } from '../models/usuario-senha-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation redefinirSenha
   */
  static readonly RedefinirSenhaPath = '/api/v1/auth/senha';

  /**
   * Inclusão ou alteração a senha do usuário.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `redefinirSenha()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redefinirSenha$Response(params: {

    /**
     * Request Token
     */
    requestToken?: string;

    /**
     * Request Token
     */
    'Request-Token'?: string;
    body: UsuarioSenhaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CredencialDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.RedefinirSenhaPath, 'put');
    if (params) {
      rb.query('requestToken', params.requestToken, {});
      rb.header('Request-Token', params['Request-Token'], {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CredencialDto>>;
      })
    );
  }

  /**
   * Inclusão ou alteração a senha do usuário.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `redefinirSenha$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  redefinirSenha(params: {

    /**
     * Request Token
     */
    requestToken?: string;

    /**
     * Request Token
     */
    'Request-Token'?: string;
    body: UsuarioSenhaDto
  },
  context?: HttpContext

): Observable<Array<CredencialDto>> {

    return this.redefinirSenha$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CredencialDto>>) => r.body as Array<CredencialDto>)
    );
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/api/v1/auth/login';

  /**
   * Concede o token de acesso ao Usuário através do 'login' e 'senha'.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {
    body: AuthDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CredencialDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.LoginPath, 'post');
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
        return r as StrictHttpResponse<Array<CredencialDto>>;
      })
    );
  }

  /**
   * Concede o token de acesso ao Usuário através do 'login' e 'senha'.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {
    body: AuthDto
  },
  context?: HttpContext

): Observable<Array<CredencialDto>> {

    return this.login$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CredencialDto>>) => r.body as Array<CredencialDto>)
    );
  }

  /**
   * Path part for operation recuperarSenha
   */
  static readonly RecuperarSenhaPath = '/api/v1/auth/senha/solicitacao/{email}';

  /**
   * Realiza a solicitação de recuperar a senha do usuário.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recuperarSenha()` instead.
   *
   * This method doesn't expect any request body.
   */
  recuperarSenha$Response(params: {

    /**
     * EMail do Usuário
     */
    email: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CredencialDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.RecuperarSenhaPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CredencialDto>>;
      })
    );
  }

  /**
   * Realiza a solicitação de recuperar a senha do usuário.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recuperarSenha$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recuperarSenha(params: {

    /**
     * EMail do Usuário
     */
    email: string;
  },
  context?: HttpContext

): Observable<Array<CredencialDto>> {

    return this.recuperarSenha$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CredencialDto>>) => r.body as Array<CredencialDto>)
    );
  }

  /**
   * Path part for operation getInfoByTokenValidacao
   */
  static readonly GetInfoByTokenValidacaoPath = '/api/v1/auth/senha/solicitacao/info';

  /**
   * Valida o token de alteração de senha.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInfoByTokenValidacao()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfoByTokenValidacao$Response(params?: {

    /**
     * Request Token
     */
    requestToken?: string;

    /**
     * Request Token
     */
    'Request-Token'?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<boolean>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.GetInfoByTokenValidacaoPath, 'get');
    if (params) {
      rb.query('requestToken', params.requestToken, {});
      rb.header('Request-Token', params['Request-Token'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<boolean>>;
      })
    );
  }

  /**
   * Valida o token de alteração de senha.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInfoByTokenValidacao$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfoByTokenValidacao(params?: {

    /**
     * Request Token
     */
    requestToken?: string;

    /**
     * Request Token
     */
    'Request-Token'?: string;
  },
  context?: HttpContext

): Observable<Array<boolean>> {

    return this.getInfoByTokenValidacao$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<boolean>>) => r.body as Array<boolean>)
    );
  }

  /**
   * Path part for operation refresh
   */
  static readonly RefreshPath = '/api/v1/auth/refresh';

  /**
   * Concede um novo token de acesso conforme o token de refresh informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refresh()` instead.
   *
   * This method doesn't expect any request body.
   */
  refresh$Response(params: {

    /**
     * Token de refresh
     */
    refreshToken: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CredencialDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.RefreshPath, 'get');
    if (params) {
      rb.query('refreshToken', params.refreshToken, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CredencialDto>>;
      })
    );
  }

  /**
   * Concede um novo token de acesso conforme o token de refresh informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refresh$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refresh(params: {

    /**
     * Token de refresh
     */
    refreshToken: string;
  },
  context?: HttpContext

): Observable<Array<CredencialDto>> {

    return this.refresh$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CredencialDto>>) => r.body as Array<CredencialDto>)
    );
  }

  /**
   * Path part for operation getInfoByToken
   */
  static readonly GetInfoByTokenPath = '/api/v1/auth/info';

  /**
   * Recupera as informações do Usuário conforme o token informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInfoByToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfoByToken$Response(params: {

    /**
     * Token
     */
    Authorization: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CredencialDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.GetInfoByTokenPath, 'get');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CredencialDto>>;
      })
    );
  }

  /**
   * Recupera as informações do Usuário conforme o token informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInfoByToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfoByToken(params: {

    /**
     * Token
     */
    Authorization: string;
  },
  context?: HttpContext

): Observable<Array<CredencialDto>> {

    return this.getInfoByToken$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CredencialDto>>) => r.body as Array<CredencialDto>)
    );
  }

}
