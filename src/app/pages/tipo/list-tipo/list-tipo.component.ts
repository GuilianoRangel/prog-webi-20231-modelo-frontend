import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TipoDto} from "../../../api/models/tipo-dto";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {MessageResponse} from "../../../api/models/message-response";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrls: ['./list-tipo.component.scss']
})
export class ListTipoComponent implements OnInit {
  colunasMostrar = ['id', 'nome', 'dataCriacao', 'status', 'acao'];
  tipoListaDataSource: MatTableDataSource<TipoDto> = new MatTableDataSource<TipoDto>([]);

  constructor(
    public tipoService: TipoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.tipoService.listAll().subscribe(data => {
      this.tipoListaDataSource.data = data;
    })
  }

  remover(tipoDto: TipoDto) {
    console.log("Removido", tipoDto.id);
    this.tipoService.remover({id: tipoDto.id || 0})
      .subscribe(retorno => {
          this.buscarDados();
          this.showMensagemSimples("Excluído com sucesso ",5000);
          console.log("Exlcusão:", retorno);
        }, error => {
          if (error.status === 404) {
            this.showMensagemSimples("Tipo não existe mais")
          } else {
            this.showMensagemSimples("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  confirmarExcluir(tipoDto: TipoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `A exclusão de: ${tipoDto.nome} (ID: ${tipoDto.id})?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: tipoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.remover(confirmed.dado);
      }
    });
  }
  showMensagemSimples( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
