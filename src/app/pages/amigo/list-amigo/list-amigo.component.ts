import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TipoDto} from "../../../api/models/tipo-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../../arquitetura/message/message.service";
import {AmigoControllerService} from "../../../api/services/amigo-controller.service";
import {AmigoDto} from "../../../api/models/amigo-dto";

@Component({
  selector: 'app-list-amigo',
  templateUrl: './list-amigo.component.html',
  styleUrls: ['./list-amigo.component.scss']
})
export class ListAmigoComponent implements OnInit {
  colunasMostrar = ['id', 'nome', 'tipo_nome', 'acao'];
  amigoListaDataSource: MatTableDataSource<AmigoDto> = new MatTableDataSource<AmigoDto>([]);

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
    this.service.amigoControllerListAll().subscribe(data => {
      this.amigoListaDataSource.data = data;
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
}
