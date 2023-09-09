/* tslint:disable:component-selector no-redundant-jsdoc */
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {MessageService} from "../arquitetura/message/message.service";
import {SecurityService} from "../arquitetura/security/security.service";
import {AbstractComponent} from "./shared/component/Abstract.component";


/**
 * Implementação do component 'Admin' responsável por prover o template padrão da aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['_ueg-theme.scss','administracao.component.scss' ]
})
export class AdministracaoComponent   extends AbstractComponent{

  /**
   * Construtor da classe.
   *
   * @param messageService
   * @param securityService
   * @param router
   */
  constructor(
    private router: Router,
    private messageService: MessageService,
    public securityService: SecurityService,
  ) {
    super();
  }


  /**
   * Verifica se o Usuário está autenticado através de sua Credencial.
   *
   * @returns boolean
   */
  public isAutenticado(): boolean {
    return this.securityService.isValid();
  }



}
