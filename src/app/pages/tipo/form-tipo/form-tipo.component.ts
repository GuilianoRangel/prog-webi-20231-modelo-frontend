import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {TipoDto} from "../../../api/models/tipo-dto";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.scss']
})
export class FormTipoComponent {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public tipoService: TipoControllerService,
    private dialog: MatDialog,
  ) {
    this.createForm();
    this._adapter.setLocale('pt-br');
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      dataCriacao: [new Date(), Validators.required],
      status: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log("Dados:",this.formGroup.value);
      this.tipoService.incluir({body: this.formGroup.value})
        .subscribe( retorno =>{
          console.log("Retorno:",retorno);
        this.confirmarInclusao(retorno);
      }, erro =>{
          console.log("Erro:"+erro);
          alert("Erro ao incluir!");
        })
    }

  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarInclusao(tipoDto: TipoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!!!',
        mensagem: `Inclusão de: ${tipoDto.nome} (ID: ${tipoDto.id}) realiza com sucesso!`,
        textoBotoes: {
          ok: 'ok',
        },
      },
    });

  }
}
