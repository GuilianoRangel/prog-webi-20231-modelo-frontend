/* tslint:disable:no-redundant-jsdoc callable-types no-shadowed-variable */
/* tslint:disable:variable-name */
import { Injectable, EventEmitter, Inject } from '@angular/core';

import { config, IConfig } from './config';
import { Credential } from './credential';
import {User} from './User';

/**
 * Classe 'Credential'.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class SecurityService {

  private intervalId: any;

  private _credential: Credential;

  public onRefresh: EventEmitter<string>;

  public onForbidden: EventEmitter<Credential>;

  public onUnauthorized: EventEmitter<Credential>;

  /**
   * Construtor da classe.
   *
   * @param config
   */
  constructor(/*@Inject(config) config: IConfig*/) {
    this._credential = new Credential(/*config*/);
    this.onRefresh = new EventEmitter<string>();
    this.onForbidden = new EventEmitter<Credential>();
    this.onUnauthorized = new EventEmitter<Credential>();
  }

  /**
   * Init security service.
   *
   * @param user
   */
  public init(user?: User): void {
    console.log('security.service', user);
    this.credential.init(user);

    if (user) {
      const expiresIn = (user.expiresIn - 60) * 1000;
      this.intervalId = setInterval(() => {
        clearInterval(this.intervalId);
        this.onRefresh.emit(this._credential.refreshToken);
      }, expiresIn);
    } else {
      if (this.isValid()) {
        this.onRefresh.emit(this._credential.refreshToken);
      }
    }
  }

  /**
   * Verifica se o Usuário possui o 'role' informado em sua credencial de acesso.
   *
   * @param roles
   */
  public hasRoles(roles: string | string[]): boolean {
    let valid = false;

    // Credencial deve ser 'true'.
    if (this.isValid()) {

      // Caso 'undefined' ou 'null' retorno será 'true'.
      if (roles && roles.length > 0) {
        const userRoles = this.credential.user?.roles;

        // Caso o usuário ativo não possua 'roles' o retorno será 'false'.
        if (userRoles) {

          // O atributo 'role' pode ser 'string' ou 'array'.
          if (typeof roles === 'string') {
            valid = userRoles.filter((userRole: string) => {
              return userRole === roles;
            }).length !== 0;
          } else {
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < roles.length; index++) {
              const role = roles[index];

              const count = userRoles.filter((userRole: string) => {
                return userRole === role;
              }).length;
              if (count > 0) {
                valid = true;
                break;
              }
            }
          }
        }
      } else {
        valid = true;
      }
    }
    return valid;
  }

  /**
   * Invalid user's credential.
   */
  public invalidate(): void {
    this._credential.clean();
    clearInterval(this.intervalId);
  }

  /**
   * Verifies that the user credential is valid.
   *
   * @returns boolean
   */
  public isValid(): boolean {
    return this._credential.user !== undefined;
  }

  /**
   * @returns credential
   */
  public get credential(): Credential {
    return this._credential;
  }
}
