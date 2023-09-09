/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ModuloClientService} from './modulo-client.service';
import {MessageService} from "../../../../arquitetura/message/message.service";


/**
 * Classe resolve responsável pela lista dos Sistemas que o Usuário Logado possui acesso.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class ModuloClientResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param moduloClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private moduloClientService: ModuloClientService,
    private messageService: MessageService
  ) { }

  /**
   * Retorna a lista dos Sistemas que o Usuário Logado possui acesso.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      console.log('resolve client');
      this.moduloClientService.getModulos().subscribe(data => {
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
