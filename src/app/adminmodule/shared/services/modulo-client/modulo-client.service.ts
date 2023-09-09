/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ModuloSistemaApiService} from "../../../../api/services/modulo-sistema-api.service";

/**
 * Classe de integração com o serviço de queimadura.
 */
@Injectable({
  providedIn: 'root'
})
export class ModuloClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private moduloService: ModuloSistemaApiService) {
  }

  /**
   * Retorna a lista de Módulos pelo id do Sistema informado.
   *
   * @param idSistema
   */
  public getModulos(): Observable<any> {
    return this.moduloService.getModulosAtivos();
  }
}
