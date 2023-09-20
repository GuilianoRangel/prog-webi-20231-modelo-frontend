/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import {MessageService} from "../../../arquitetura/message/message.service";
import {LocalControllerService} from "../../../api/services/local-controller.service";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {TipoDto} from "../../../api/models/tipo-dto";


/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class TipoResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param usuarioClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private service: TipoControllerService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de Usuário.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<TipoDto[]> {

    return new Observable(observer => {
      this.service.tipoControllerListAll().subscribe(
        (data: TipoDto[]) => {
          const data2 = data.filter(value => value.status == 'ATIVO');
          observer.next(data2);
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
