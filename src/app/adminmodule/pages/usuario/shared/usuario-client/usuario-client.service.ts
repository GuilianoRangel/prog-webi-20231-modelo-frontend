/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioApiService} from "../../../../../api/services/usuario-api.service";
import {FiltroUsuarioDto} from "../../../../../api/models/filtro-usuario-dto";

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private usuarioService: UsuarioApiService) { }

  /**
   * Retorna a instância de Usuário conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.usuarioService.getUsuarioById({id: id});
  }

  /**
   * Retorna o array de Usuários confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroUsuarioDto): Observable<any> {
    return this.usuarioService.getUsuariosByFiltro({filtroDTO: filtroDTO});
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param usuario
   */
  public salvar(usuario: any): Observable<any> {
    let result: Observable<any> ;

    if (usuario.id) {
      result= this.usuarioService.alterarUsuario({id: usuario.id, body: usuario});
    } else {
      result= this.usuarioService.incluirUsuario({body: usuario});
    }
    return result;
  }

  /**
   * Ativa o Usuário pelo 'id' informado.
   *
   * @param id
   * @return
   */
  public ativar(id: number): Observable<any> {
    return this.usuarioService.ativarUsuario({id: id});
  }

  /**
   *  Inativa Usuário pelo 'id' informado.
   *
   * @param id
   * @return
   */
  public inativar(id: number): Observable<any> {
    return this.usuarioService.inativarUsuario({id: id});
  }

  /**
   * Retorna se o CPF informado é válido e se está em uso.
   *
   * @param login
   * @param id
   */
  public validarLogin(login: string, id: number): Observable<any> {
    let observable: Observable<any>;

    if (id === undefined) {
      observable = this.usuarioService.validarLogin({login: login});
    } else {
      observable = this.usuarioService.validarLoginUsuario({id: id, login: login});
    }
    return observable;
  }
}
