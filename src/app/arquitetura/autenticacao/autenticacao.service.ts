/* tslint:disable:no-redundant-jsdoc callable-types */
/* tslint:disable:variable-name */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {AuthDto} from "../../api/models/auth-dto";
import {AuthApiService} from "../../api/services/auth-api.service";


/**
 * Classe service responsável por prover os recursos associadas a autenticação de 'Usuário'.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class AutenticacaoService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient,
              private authApiService: AuthApiService
              ) { }

  /**
   * Autentica o Usuário na aplicação conforme os parâmetros informados.
   *
   * @param usuarioTO
   */
  public login(usuarioTO: AuthDto): Observable<any> {
    return this.authApiService.login({body: usuarioTO});
    //return this.http.post(`${environment.urlApi}/auth/login`, usuarioTO);
  }

  /**
   * Solicita um novo token temporário para o Usuário logado.
   *
   * @param refreshToken
   */
  public refresh(refreshToken: string): Observable<any> {
    return this.authApiService.refresh({refreshToken});
  }

  /**
   * Valida se o token é de alteração de senha do usuário.
   *
   * @param token
   */
  /*public validarSolicitacaoSenha(token: string): Observable<any> {
    const params = new HttpParams().append('requestToken', token);

    return this.http.get(`${environment.urlApi}/auth/senha/solicitacao/info`, { params });
  }*/

  /**
   * Salva a instância de Usuário.
   *
   * @param usuario
   */
  /*public alterarSenha(usuario: any): Observable<any> {
    return this.http.put(`${environment.urlApi}/contas/senha`, usuario);
  }*/

  /**
   * Redefinição da senha do Usuário.
   * @param redefinirSenhaTO
   */
  /*public redefinirSenha(redefinirSenhaTO: any): Observable<any> {
    let params = new HttpParams();

    if (redefinirSenhaTO.token) {
      params = params.append('requestToken', redefinirSenhaTO.token);
    }
    return this.http.put(`${environment.urlApi}/auth/senha`, redefinirSenhaTO, { params });
  }*/

  /**
   * Solicita a alteração de senha do Usuário.
   *
   * @param cpfCnpj
   */
  /*public solicitarAlteracaoSenha(cpfCnpj: string): Observable<any> {
    return this.http.get(`${environment.urlApi}/auth/senha/solicitacao/${cpfCnpj}`);
  }*/

}
