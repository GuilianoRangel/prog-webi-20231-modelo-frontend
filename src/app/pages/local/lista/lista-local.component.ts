import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../../arquitetura/message/message.service";
import {GrupoClientService} from "../../../adminmodule/pages/grupo/shared/grupo-client/grupo-client.service";
import {SecurityService} from "../../../arquitetura/security/security.service";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {BaseComponent} from "../../../core/BaseComponent";
import {LocalControllerService} from "../../../api/services/local-controller.service";
import {TipoDto} from "../../../api/models/tipo-dto";
import {LocalDto} from "../../../api/models/local-dto";

@Component({
  selector: 'app-lista',
  templateUrl: './lista-local.component.html',
  styleUrls: ['./lista-local.component.scss']
})
export class ListaLocalComponent extends BaseComponent<LocalDto> implements OnInit{
  filtroDTO: any;
  public displayedColumns = ['numeroSala', 'nome', 'descricao', 'acoes'];
  public dataSource: MatTableDataSource<LocalDto> = new MatTableDataSource<LocalDto>([]);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    protected override route: ActivatedRoute,
    protected override router: Router,
    private messageService: MessageService,
    public securityService: SecurityService,
    public localService: LocalControllerService,
  ) {
    super(route, router);
  }
  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.localService.localControllerListAll().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  limpar() {

  }

  pesquisar(filtroDTO: any) {

  }

  showResult($event: any[]) {
    this.dataSource.data = $event;
  }
}
