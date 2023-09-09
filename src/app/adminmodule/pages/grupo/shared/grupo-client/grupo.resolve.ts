/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { GrupoClientService } from './grupo-client.service';
import {MessageService} from "../../../../../arquitetura/message/message.service";

/**
 * Classe resolve responsável pela busca das informações da grupo conforme o id.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class GrupoResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param grupoClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private grupoClientService: GrupoClientService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de grupo.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params['id'];

    return new Observable(observer => {
      this.grupoClientService.getById(id).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
          this.router.navigate(['']);
          this.messageService.addMsgDanger(error);
        }
      );
    });
  }
}
