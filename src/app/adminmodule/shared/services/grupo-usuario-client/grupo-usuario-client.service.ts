/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GrupoApiService} from "../../../../api/services/grupo-api.service";

/**
 * Classe de integração com o serviço de queimadura.
 */
@Injectable({
  providedIn: 'root'
})
export class GrupoUsuarioClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private grupoUsuarioService: GrupoApiService) {
  }

  /**
   * Recupera uma lista dos grupos ativos do usuário atual do token
   *
   * @return
   */
  public getAllByAtivosByAcessoUsuario(): Observable<any> {
    return this.grupoUsuarioService.getGruposByUsuarioLogado();
  }
}
