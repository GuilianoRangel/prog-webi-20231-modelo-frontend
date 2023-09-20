import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {TipoDto} from "../../../api/models/tipo-dto";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Message, MessageService} from "../../../arquitetura/message/message.service";
import {AmigoControllerService} from "../../../api/services/amigo-controller.service";
import {AmigoDto} from "../../../api/models/amigo-dto";

@Component({
  selector: 'app-form-amigo',
  templateUrl: './form-amigo.component.html',
  styleUrls: ['./form-amigo.component.scss']
})
export class FormAmigoComponent {
  formGroup!: FormGroup;
  public readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR = "Editar";

  acao : string = this.ACAO_INCLUIR;
  id!: number;

  tipos: TipoDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public service: AmigoControllerService,
    private dialog: MatDialog,
    private messageService: MessageService,
    private tipoService: TipoControllerService
  ) {
    this.carregarDados();
    this.createForm();
    this.prepararEdicao();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      tipo_id: [null, Validators.required],
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
    this.service.amigoControllerIncluir({body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_INCLUIR);
        this.router.navigate(["/amigo"]);
      }, erro => {
        console.log("Erro:" , erro);
        this.showError(erro, this.ACAO_INCLUIR)
      })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarAcao(amigoDto: AmigoDto, acao: string) {
    this.messageService.addMsgSuccess(`Ação de ${acao} dados: ${amigoDto.nome} (ID: ${amigoDto.id}) realizada com sucesso!`);
  }
  showError(erro: Message, acao: string) {
    this.messageService.addConfirmOk(`Erro ao ${acao}, Mensagem: ${erro.message}`);
  }

  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('codigo');
    if (paramId){
      const codigo = parseInt(paramId);
      console.log("codigo",paramId);
      this.service.amigoControllerObterPorId({id: codigo}).subscribe(
        retorno => {
          this.acao = this.ACAO_EDITAR;
          console.log("retorno", retorno);
          this.id = retorno.id;
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
    this.service.amigoControllerAlterar({id: this.id, body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_EDITAR);
        this.router.navigate(["/amigo"]);
      }, erro => {
        console.log("Erro:", erro.error);
        this.showError(erro, this.ACAO_EDITAR);
      })
  }

  private carregarDados() {
    //this.tipos = this.route.snapshot.data['tipos'];
    this.tipoService.tipoControllerListAll().subscribe(value => {
      this.tipos = value;
    })
  }
}
