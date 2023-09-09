/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GrupoApiService} from "../../../../../api/services/grupo-api.service";
import {group} from "@angular/animations";
import {FiltroGrupoDto} from "../../../../../api/models/filtro-grupo-dto";

/**
 * Classe de integração com o serviço de grupo.
 */
@Injectable({
  providedIn: 'root'
})
export class GrupoClientService {

  /**
   * Construtor da classe.
   *
   * @param grupoApiService
   */
  constructor(private grupoApiService: GrupoApiService) { }

  /**
   * Salva a instância de grupo.
   *
   * @param grupo
   * @return
   */
  public salvar(grupo: any): Observable<any> {
    let result: Observable<any>;

    if (grupo.id) {
      result = this.grupoApiService.alterarGrupo({id: grupo.id, body:grupo} );
    } else {
      result = this.grupoApiService.incluirGrupo({body: grupo});
    }
    return result;
  }

  /**
   *  Inativa a grupo confomre o 'id' informado.
   *
   * @param id
   * @return
   */
  public inativar(id: number): Observable<any> {
    return this.grupoApiService.inativarGrupo({id: id});
  }

  /**
   * Ativa a grupo conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public ativar(id: number): Observable<any> {
    return this.grupoApiService.ativarGrupo({id: id});
  }

  /**
   * Retorna uma instância de grupo conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.grupoApiService.getGrupoById({id: id});
  }

  /**
   * Retorna o array de grupo confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroGrupoDto): Observable<any> {
    return this.grupoApiService.getAllGrupoByFiltro({filtroGrupoDTO: filtroDTO})
  }

  /**
   * Retorna a lista de Grupos Ativos.
   *
   * @param idSistema
   */
  public getGruposAtivos(): Observable<any> {
    return this.grupoApiService.getGruposAtivos();
  }

  /**
   * Retorna a Estatisticas de Usuários por Grupo.
   *
   * @param idSistema
   */
  public getGruposStats(): Observable<any> {
    return this.grupoApiService.getGruposEstatisticas();
  }
}
