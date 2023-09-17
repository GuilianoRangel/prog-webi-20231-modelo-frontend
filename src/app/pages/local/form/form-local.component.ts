import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../core/BaseComponent";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DateAdapter} from "@angular/material/core";
import {TipoControllerService} from "../../../api/services/tipo-controller.service";
import {MatDialog} from "@angular/material/dialog";
import {Message, MessageService} from "../../../arquitetura/message/message.service";
import {LocalControllerService} from "../../../api/services/local-controller.service";
import {LocalDto} from "../../../api/models/local-dto";
import {TipoDto} from "../../../api/models/tipo-dto";

@Component({
  selector: 'app-form',
  templateUrl: './form-local.component.html',
  styleUrls: ['./form-local.component.scss']
})
export class FormLocalComponent extends BaseComponent<LocalDto> implements OnInit{
  local!: LocalDto;

  acao : string = this.ACAO_INCLUIR;
  id!: string;

  constructor(
    protected override route: ActivatedRoute,
    protected override router: Router,
    private formBuilder: FormBuilder,
    public localService: LocalControllerService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {
    super(route, router);
    this.createForm();
    this.prepararEdicao();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      numeroSala: [null,
        [Validators.required,
          Validators.min(1),
          Validators.max(100000),
          Validators.minLength(3),
          Validators.maxLength(6)
        ]
      ],
      nome: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      descricao: [null, Validators.maxLength(100)],
      chaves: [[]]
    });
  }

  ngOnInit(): void {
  }

  validarNumeroSala() {

  }

  cancelar() {
    this.messageService.addConfirmYesNo(`Cancelar ação?`,() => {
      this.router.navigate(["/local"]);
    })

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
    this.localService.localControllerIncluir({body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_INCLUIR);
        this.router.navigate(["/local"]);
      }, erro => {
        console.log("Erro:" , erro);
        this.showError(erro, this.ACAO_INCLUIR)
      })
  }

  confirmarAcao(tipoDto: LocalDto, acao: string) {
    this.messageService.addMsgSuccess(`Ação de ${acao} dados: ${tipoDto.nome} realizada com sucesso!`);
  }
  showError(erro: Message, acao: string) {
    this.messageService.addConfirmOk(`Erro ao ${acao}, Mensagem: ${erro.message}`);
  }

  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const codigo = paramId;
      console.log("codigo",paramId);
      this.localService.localControllerObterPorIdHash({id: codigo}).subscribe(
        retorno => {
          this.acao = this.ACAO_EDITAR;
          console.log("retorno", retorno);
          this.id = retorno.idHash;
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
    this.localService.localControllerAlterarIdHash({id: this.id, body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_EDITAR);
        this.router.navigate(["/local"]);
      }, erro => {
        console.log("Erro:", erro.error);
        this.showError(erro, this.ACAO_EDITAR);
      })
  }
}
