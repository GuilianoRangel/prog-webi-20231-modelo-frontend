/* tslint:disable:no-redundant-jsdoc callable-types no-shadowed-variable */
/* tslint:disable:variable-name */
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SecurityService } from './security.service';
import { config, IConfig } from './config';

/**
 * Implementação que garante a segurança das rotas permitindo o acesso apenas se o 'Usuário' estiver autenticado
 * na aplicação e possuir os papéis necessários para o acessar.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class SecurityGuard implements CanActivate {

    /**
     * Construtor da classe.
     *
     * @param router
     * @param securityService
     * @param config
     */
    constructor(
      private router: Router,
      private securityService: SecurityService,
      @Inject(config) private config: IConfig) { }

    /**
     * Intercepta a rota e verifica se a mesma poderá ou não ser apresentada.
     *
     * @param next
     * @param state
     */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let valid = false;
        console.log('canActive');
        if (this.securityService.isValid()) {
            const roles = next.data['security'] ? next.data['security'].roles : [];

            if (this.securityService.hasRoles(roles)) {
                valid = true;
            } else {
              this.securityService.onForbidden.emit(this.securityService.credential);
              this.router.navigate(['']);
            }
        } else {
            this.router.navigate([this.config.loginRouter]);
        }
        return valid;
    }

}
