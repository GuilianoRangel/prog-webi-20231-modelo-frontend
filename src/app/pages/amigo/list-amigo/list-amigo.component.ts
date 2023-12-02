import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../../arquitetura/message/message.service";
import {AmigoControllerService} from "../../../api/services/amigo-controller.service";
import {AmigoDto} from "../../../api/models/amigo-dto";
import {MatPaginator} from "@angular/material/paginator";
import {of as observableOf, startWith, switchMap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {SearchFieldValue} from "../../../api/models/search-field-value";

@Component({
  selector: 'app-list-amigo',
  templateUrl: './list-amigo.component.html',
  styleUrls: ['./list-amigo.component.scss']
})
export class ListAmigoComponent implements AfterViewInit {
  colunasMostrar = ['id', 'nome', 'tipo_nome', 'acao'];
  amigoListaDataSource: MatTableDataSource<AmigoDto> = new MatTableDataSource<AmigoDto>([]);
  searchValues: SearchFieldValue[] = [];

  totalRows = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.amigoListaDataSource.paginator = this.paginator;

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.service.amigoControllerSearchFieldsActionPage({
              page: this.paginator.pageIndex,
              size: this.paginator.pageSize,
              sort: ["nome"],
              body: this.searchValues
          })
            .pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {

          if (data == null) return [];

          this.totalRows = data.totalElements;
          this.pageSize = data.size;

          return data.content;
        })
      )
      .subscribe((data) => {
        this.amigoListaDataSource = new MatTableDataSource<AmigoDto>(data);
      });
  }
  constructor(
    public service: AmigoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private messageService: MessageService
  ) {
    this.searchValues = [
      { name: "nome",
        searchType:  'ALL',
        type: 'String',
        value: '%%'
      }
    ];
  }

  remover(amigoDto: AmigoDto) {
    console.log("Removido", amigoDto.id);
    this.service.amigoControllerRemover({id: amigoDto.id || 0})
      .subscribe(retorno => {
          this.paginator.page.emit();
          this.messageService.addMsgSuccess(`Amigo: ${retorno.nome} Excluído com sucesso!!!`);
        }, error => {
          if (error.status === 404) {
            this.messageService.addMsgInf("Amigo não existe mais")
          } else {
            this.messageService.addMsgDanger("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  confirmarExcluir(amigoDto: AmigoDto) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão de: ${amigoDto.nome} (ID: ${amigoDto.id})?`,() => {
      this.remover(amigoDto);
    });
  }
  updateSearchValue($event: any[]) {
    this.searchValues = $event;
    this.paginator.page.emit()
  }
}
