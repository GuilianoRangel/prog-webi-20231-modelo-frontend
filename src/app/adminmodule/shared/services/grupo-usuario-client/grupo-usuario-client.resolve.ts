/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import {GrupoUsuarioClientService} from './grupo-usuario-client.service';
import {MessageService} from "../../../../arquitetura/message/message.service";


/**
 * Classe resolve responsável pela lista dos Sistemas que o Usuário Logado possui acesso.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class GrupoUsuarioClientResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param grupoUsuarioClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private grupoUsuarioClientService: GrupoUsuarioClientService,
    private messageService: MessageService
  ) { }

  /**
   * Retorna a lista dos Sistemas que o Usuário Logado possui acesso.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      this.grupoUsuarioClientService.getAllByAtivosByAcessoUsuario().subscribe(data => {
        observer.next(data);
        observer.complete();
      }, error => {
        if (error.status === 404) {
          observer.next();
          observer.complete();
        } else {
          observer.error(error);
          this.messageService.addMsgDanger(error);
        }
      });
    });
  }
}
