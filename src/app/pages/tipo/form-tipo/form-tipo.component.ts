import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {TipoDto} from "../../../api/models/tipo-dto";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Message, MessageService} from "../../../arquitetura/message/message.service";

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.scss']
})
export class FormTipoComponent {
  formGroup!: FormGroup;
  public readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR = "Editar";

  acao : string = this.ACAO_INCLUIR;
  id!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public tipoService: TipoControllerService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {
    this.createForm();
    this._adapter.setLocale('pt-br');
    this.prepararEdicao();
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
      if(!this.id){
        this.realizarInclusao();
      }else{
        this.realizarEdicao();
      }
    }

  }

  private realizarInclusao() {
    console.log("Dados:", this.formGroup.value);
    this.tipoService.incluir({body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_INCLUIR);
        this.router.navigate(["/tipo"]);
      }, erro => {
        console.log("Erro:" , erro);
        this.showError(erro, this.ACAO_INCLUIR)
      })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarAcao(tipoDto: TipoDto, acao: string) {
    this.messageService.addMsgSuccess(`Ação de ${acao} dados: ${tipoDto.nome} (ID: ${tipoDto.id}) realizada com sucesso!`);
  }
  showError(erro: Message, acao: string) {
    this.messageService.addConfirmOk(`Erro ao ${acao}, Mensagem: ${erro.message}`);
  }

  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('codigo');
    if (paramId){
      const codigo = parseInt(paramId);
      console.log("codigo",paramId);
      this.tipoService.obterPorId({id: codigo}).subscribe(
        retorno => {
          this.acao = this.ACAO_EDITAR;
          console.log("retorno", retorno);
          this.id = retorno.id;
          retorno.dataCriacao = `${retorno.dataCriacao}T03:00:00.000Z`;
          this.formGroup.patchValue(retorno);
        },error => {
          console.log("erro", error);
          this.messageService.addMsgWarning(`Erro ao buscar ID: ${codigo}, mensagem: ${error.message}`);
        }
      )
    }
  }

  private realizarEdicao() {
    console.log("Dados:", this.formGroup.value);
    this.tipoService.alterar({id: this.id, body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_EDITAR);
        this.router.navigate(["/tipo"]);
      }, erro => {
        console.log("Erro:", erro.error);
        this.showError(erro, this.ACAO_EDITAR);
      })
  }
}
