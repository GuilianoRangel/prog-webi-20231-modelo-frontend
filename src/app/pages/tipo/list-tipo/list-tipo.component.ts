import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TipoDto} from "../../../api/models/tipo-dto";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {MessageResponse} from "../../../api/models/message-response";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../../arquitetura/message/message.service";

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
    private snackBar: MatSnackBar,
    private messageService: MessageService
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

  confirmarExcluir(tipoDto: TipoDto) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão de: ${tipoDto.nome} (ID: ${tipoDto.id})?`,() => {
      this.remover(tipoDto);
    });
    /*const dialogRef = this.dialog.open(ConfirmationDialog, {
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
    });*/
  }
}
