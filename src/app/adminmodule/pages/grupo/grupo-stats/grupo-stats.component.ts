/* tslint:disable:no-redundant-jsdoc */
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { GrupoClientService } from '../shared/grupo-client/grupo-client.service';
import {GrupoStats} from './grupo-stats';
import {AbstractComponent} from "../../../shared/component/Abstract.component";
import {SecurityService} from "../../../../arquitetura/security/security.service";
import {MessageService} from "../../../../arquitetura/message/message.service";

/**
 * Componente de listagem de Grupo.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-stats.component.html',
  styleUrls: ['./grupo-stats-component.scss']
})
export class GrupoStatsComponent extends  AbstractComponent implements OnInit {

  public grupoStats: GrupoStats[];

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
  ) {
    super();
    this.grupoStats = route.snapshot.data['grupoEstatitisticas'];
    console.log('GrupoStats: ', this.grupoStats);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
  }

  pointClickHandler(e: any) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e: any) {
    const arg = e.target
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item: any) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

}
