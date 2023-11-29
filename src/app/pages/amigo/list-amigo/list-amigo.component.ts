import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../../arquitetura/message/message.service";
import {AmigoControllerService} from "../../../api/services/amigo-controller.service";
import {AmigoDto} from "../../../api/models/amigo-dto";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-amigo',
  templateUrl: './list-amigo.component.html',
  styleUrls: ['./list-amigo.component.scss']
})
export class ListAmigoComponent implements OnInit , AfterViewInit {
  colunasMostrar = ['id', 'nome', 'tipo_nome', 'acao'];
  amigoListaDataSource: MatTableDataSource<AmigoDto> = new MatTableDataSource<AmigoDto>([]);

  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.buscarDados();
  }

  ngAfterViewInit() {
    this.amigoListaDataSource.paginator = this.paginator;
  }
  constructor(
    public service: AmigoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.service.amigoControllerListAllPage({page: {
      page: this.currentPage, size: this.pageSize, sort:['nome'] }
    }).subscribe(data => {
      this.totalRows = data.totalElements;
      this.amigoListaDataSource.data = data.content;
      this.paginator.pageIndex = this.currentPage;
      this.paginator.length = data.totalElements;
    })
  }

  remover(amigoDto: AmigoDto) {
    console.log("Removido", amigoDto.id);
    this.service.amigoControllerRemover({id: amigoDto.id || 0})
      .subscribe(retorno => {
          this.buscarDados();
          this.messageService.addMsgSuccess(`Tipo: ${retorno.nome} Excluído com sucesso!!!`);
          console.log("Exlcusão:", retorno);
        }, error => {
          if (error.status === 404) {
            this.messageService.addMsgInf("Tipo não existe mais")
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
    /*const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `A exclusão de: ${amigoDto.nome} (ID: ${amigoDto.id})?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: amigoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.remover(confirmed.dado);
      }
    });*/
  }
  showResult($event: any[]) {
    this.amigoListaDataSource.data = $event;
  }
}
