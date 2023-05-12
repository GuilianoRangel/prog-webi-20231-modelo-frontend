import {Component, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialog {
  titulo = "Titulo: Confirmar?";
  mensagem: string = "Tem certeza?"
  textoBotaoOk = "Sim"
  textoBotaoCancelar = "Cancelar"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ConfirmationDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialog, ConfirmationDialogResult>) {
    if(data){
      this.titulo = data?.titulo || this.titulo
      this.mensagem = data.mensagem || this.mensagem;
      this.textoBotaoOk = data?.textoBotoes?.ok || this.textoBotaoOk;
      this.textoBotaoCancelar = data?.textoBotoes?.cancel || this.textoBotaoCancelar;
    }
  }
  get showCancelButton(): boolean{
    return !!this.data?.textoBotoes?.cancel;
  }

  get showOkButton(): boolean {
    return !!this.data?.textoBotoes?.ok
  }

  onConfirmClick(): void {
    this.dialogRef.close({
      resultado: true,
      dado: this.data?.dado
    });
  }

}
export interface ConfirmationDialogData {
  titulo?: string;
  mensagem?: string;
  textoBotoes?: {
    ok?: string;
    cancel?: string;
  }
  dado?: any
}

export interface ConfirmationDialogResult {
  resultado: boolean;
  dado?: any;
}

