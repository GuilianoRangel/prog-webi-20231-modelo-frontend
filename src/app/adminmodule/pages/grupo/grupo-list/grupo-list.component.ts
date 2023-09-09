/* tslint:disable:no-redundant-jsdoc */
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { GrupoClientService } from '../shared/grupo-client/grupo-client.service';
import {AbstractComponent} from "../../../shared/component/Abstract.component";
import {FiltroGrupoDto} from "../../../../api/models/filtro-grupo-dto";
import {MessageService} from "../../../../arquitetura/message/message.service";
import {SecurityService} from "../../../../arquitetura/security/security.service";
import {ModuloSistemaApiService} from "../../../../api/services/modulo-sistema-api.service";
import {StatusAtivoInativo} from "../../../app.constantes";

/**
 * Componente de listagem de Grupo.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list-component.scss']
})
export class GrupoListComponent extends  AbstractComponent implements OnInit {

  public filtroDTO: FiltroGrupoDto = {};

  public dataSource: MatTableDataSource<any>;

  public modulos: any[];

  public modulosDisabled: boolean;

  public displayedColumns = ['grupo', 'status', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param grupoClientService
   * @param securityService
   * @param moduloService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    private grupoClientService: GrupoClientService, // TODO ver se vai usar mesmo
    public securityService: SecurityService,
    private moduloService: ModuloSistemaApiService
  ) {
    super();
    const grupos = route.snapshot.data['grupos'];
    this.modulos = route.snapshot.data['modulos'];
    this.dataSource = new MatTableDataSource<any>(grupos);
    this.initFlagStatus(this.dataSource);
    this.modulosDisabled = false;
    // TODO não remover - explicar os dois jeitos.
    // this.carregarModulos();
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = {};
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Inicializa a flag que identifica que a instância do grupo está 'Ativa' ou 'Inativa'.
   *
   * @param dataSource
   */
  private initFlagStatus(dataSource: MatTableDataSource<any>): void {
    this.dataSource.data.forEach(grupo => {
      grupo.ativo = this.isStatusAtivo(grupo);
    });
  }

  /**
   * Pesquisa o grupo conforme o filtro de pesquisa informado.
   *
   * @param filtroGrupoDTO
   */
  public pesquisar(filtroGrupoDTO: FiltroGrupoDto): void {
    console.log('pesquisa-grupo:', filtroGrupoDTO);
    this.grupoClientService.getByFiltro(filtroGrupoDTO).subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
      this.initFlagStatus(this.dataSource);
    }, data => {
      this.messageService.addMsgDanger(data);
      this.dataSource.data = [];
    });
  }

  /**
   * Carrega os módulos .
   *
   */
  /*public carregarModulos() {
      this.moduloService.getModulos().subscribe(
        data => {
          this.modulos = data;
          this.modulosDisabled = false;
        },
        error => {
          this.modulos = undefined;
          this.modulosDisabled = true;
          delete this.filtroDTO.idModulo;
          if (error.code !== 'ME003') {
            this.messageService.addMsgDanger(error);
          }
        }
      );
  }*/

  /**
   * Limpa o filtro de pesquisa informado.
   */
  public limpar(): void {
    this.filtroDTO = {};
    this.dataSource.data = [];
  }

  /**
   * Verifica se o status do grupo informado e igual a 'Ativo'.
   *
   * @param grupo
   */
  public isStatusAtivo(grupo: any): boolean {
    return grupo.status === StatusAtivoInativo.ATIVO.id;
  }

  /**
   * Altera o status do grupo informado.
   *
   * @param grupo
   */
  public alterarStatus(grupo: any): void {
    if (grupo.status) {
      grupo.status = false;
      this.inativar(grupo);
    } else {
      grupo.status = true;
      this.ativar(grupo);
    }
  }

  /**
   * Ativa o grupo informado.
   *
   * @param grupo
   */
  private ativar(grupo: any): void {
    this.messageService.addConfirmYesNo('Confirmar Ativar o Grupo', () => {
      this.grupoClientService.ativar(grupo.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('Ativado com sucesso');
      }, error => {
        grupo.status = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      grupo.status = false;
    });
  }

  /**
   * Inativa o grupo informado.
   *
   * @param grupo
   */
  private inativar(grupo: any): void {
    this.messageService.addConfirmYesNo('Confirmar Inativar o Grupo', () => {
      this.grupoClientService.inativar(grupo.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('Inativado com sucesso');
      }, error => {
        grupo.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      grupo.status = true;
    });
  }
}
