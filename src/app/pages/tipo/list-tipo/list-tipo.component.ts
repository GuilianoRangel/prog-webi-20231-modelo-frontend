import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TipoDto} from "../../../api/models/tipo-dto";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {MessageService} from "../../../arquitetura/message/message.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {startWith, switchMap, of as observableOf} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrls: ['./list-tipo.component.scss']
})
export class ListTipoComponent implements OnInit , AfterViewInit {
  colunasMostrar = ['id', 'nome', 'dataCriacao', 'status', 'acao'];
  tipoListaDataSource: MatTableDataSource<TipoDto> = new MatTableDataSource<TipoDto>([]);

  totalRows = 0;
  pageSize = 2;
  currentPage = 0;
  pageSizeOptions: number[] = [2, 5, 10, 25, 100];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild('tipoTbSort')
  tipoTbSort = new MatSort();

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  ngAfterViewInit() {
    this.tipoListaDataSource.paginator = this.paginator;
  }

  constructor(
    public tipoService: TipoControllerService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.tipoService.tipoControllerListAll().subscribe(data => {
      this.confDataResult(data);
    })
  }

  private confDataResult(data: any[] | undefined) {
    this.totalRows = data?.length || 0;
    this.currentPage = 0;
    this.tipoListaDataSource = new MatTableDataSource<TipoDto>(data || []);
    this.tipoListaDataSource.paginator = this.paginator;
    this.tipoListaDataSource.sort = this.tipoTbSort;
    this.tipoTbSort.disableClear = true;
    this.paginator.length = this.totalRows;
  }

  remover(tipoDto: TipoDto) {
    this.tipoService.tipoControllerRemover({id: tipoDto.id || 0})
      .subscribe(retorno => {
          this.buscarDados();
          this.messageService.addMsgSuccess(`Tipo: ${retorno.nome} Excluído com sucesso!!!`);
        }, error => {
          if (error.status === 404) {
            this.messageService.addMsgInf("Tipo não existe mais")
          } else {
            this.messageService.addMsgDanger("Erro ao excluir"+error.message);
            console.log("Erro:", error);
          }
        }
      )
  }

  confirmarExcluir(tipoDto: TipoDto) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão de: ${tipoDto.nome} (ID: ${tipoDto.id})?`,() => {
      this.remover(tipoDto);
    });
  }

  showResult($event: any[]) {
    this.confDataResult($event);
  }
}
