/* tslint:disable:no-redundant-jsdoc */
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { AcaoSistema } from '../../../shared/component/acao-sistema.acao';
import { AbstractComponent } from '../../../shared/component/Abstract.component';
import {MessageService} from "../../../../arquitetura/message/message.service";
import {SecurityService} from "../../../../arquitetura/security/security.service";
import {TelefoneUsuarioDto} from "../../../../api/models/telefone-usuario-dto";

/**
 * Componente de formulário de Telefone do Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-telefone-form',
  templateUrl: './usuario-telefone-form.component.html',
  styleUrls: ['./usuario-telefone-form.component.scss']
})
export class UsuarioTelefoneFormComponent extends AbstractComponent implements OnInit {

  @Input() idUsuario: any;
  @Input() telefonesUsuario!: TelefoneUsuarioDto[];

  public acaoSistema: AcaoSistema;

  public telefoneInclusao: any;
  public telefoneMask!: string;
  public submitted: boolean = false;

  private dialogRef!: MatDialogRef<any>;

  public dataSourceTelefones!: MatTableDataSource<any>;

  public displayedColumns: any;

  @ViewChild('formTelefone', { static: true }) formTelefone!: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService
  ) {
    super();
    this.acaoSistema = new AcaoSistema(route);
    this.telefoneInclusao = {};

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.displayedColumns = ['tipoTelefone', 'ddd', 'numeroTelefone'];
    } else {
      this.displayedColumns = ['tipoTelefone', 'ddd', 'numeroTelefone', 'remover'];
    }
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit(): void {
    this.dataSourceTelefones = new MatTableDataSource<any>();
    this.dataSourceTelefones.data = this.telefonesUsuario;
  }

  /**
   * Adiciona o Telefone à lista de telefones do Usuário.
   *
   * @param telefone
   */
  public adicionarTelefone(telefone: any, form: NgForm): void {
    if (form.valid) {
      const telefoneDuplicado = this.validarDuplicidadeTelefone(telefone);

      if (!telefoneDuplicado) {
        this.telefonesUsuario.push({
          idUsuario: this.idUsuario,
          numero: telefone.numero,
          idTipo: telefone.tipo.id,
          descricaoTipo: telefone.tipo.descricao,
          ddd: telefone.ddd
        });
        this.dataSourceTelefones.data = this.telefonesUsuario;
        this.closeDialogs();
      } else {
        this.messageService.addMsgSuccess('Telefone já existe!');
      }
    }
  }

  /**
   * Verifica se o telefone informado já foi adicionado na lista de Telefones do Usuário.
   *
   * @param telefone
   */
  private validarDuplicidadeTelefone(telefone: any): boolean {
    let duplicado = false;
    const numeroConcatenado: string = telefone.ddd.concat(telefone.numero);

    // Busca o Telefone na lista de Telefones do Usuário
    const telefoneEncontrado = this.telefonesUsuario.find(telefoneLista => {
      return telefoneLista.ddd && telefoneLista.numero && telefoneLista.ddd.concat(telefoneLista.numero) === numeroConcatenado;
    });

    if (telefoneEncontrado !== undefined) {
      duplicado = true;
    }
    return duplicado;
  }

  /**
   * Remove o Telefone da lista de telefones do Usuário.
   *
   * @param telefone
   */
  public removerTelefone(telefone: any): void {
    this.messageService.addConfirmYesNo('Remover o telefone?', () => {
      const index = this.telefonesUsuario.indexOf(telefone);
      this.telefonesUsuario.splice(index, 1);
      this.dataSourceTelefones.data = this.telefonesUsuario;
      this.messageService.addMsgSuccess('Operação realizada com sucesso!');
    });
  }

  /**
   * Abre o Modal de Inclusão de Telefone.
   *
   * @param template
   */
  public openDialogTelefone(template: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(template, {
      minWidth: '60%',
      minHeight: '50%',
      disableClose: true
    });
  }

  /**
   * Fecar o Modal de Inclusão de Telefone.
   */
  public closeDialogs(): void {
    this.dialogRef.close();
    this.telefoneInclusao = {};
  }

  /**
   * Ajusta a Máscara do Telefone de acordo com seu tamanho.
   */
  public onTelefoneChange(): void {
    if (this.telefoneInclusao.numero.length < 9) {
      this.telefoneMask = '0000-00009';
    } else {
      this.telefoneMask = '00000-0000';
    }
  }
}
