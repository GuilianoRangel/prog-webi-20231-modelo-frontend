/* tslint:disable:no-redundant-jsdoc callable-types */
/* tslint:disable:variable-name */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {SecurityService} from "../security/security.service";


/**
 * Implementação de 'Guard' responsável por permitir acesso a interface de login caso não exista Usuário logado.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class AutenticacaoGuard implements CanActivate {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param securityService
   */
  constructor(private router: Router, private securityService: SecurityService) { }

  /**
   * Inercepta a rota e verifica se a mesma poderá ou não ser apresentada.
   *
   * @param next
   * @param state
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let acesso = true;

    if (this.securityService.isValid()) {
      acesso = false;
      this.router.navigate(['/']);
    }
    return acesso;
  }

}
