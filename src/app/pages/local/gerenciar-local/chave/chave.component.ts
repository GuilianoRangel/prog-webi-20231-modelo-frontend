import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChaveDto} from "../../../../api/models/chave-dto";
import {MatTableDataSource} from "@angular/material/table";
import {TipoDto} from "../../../../api/models/tipo-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../../../arquitetura/message/message.service";
import {LocalControllerService} from "../../../../api/services/local-controller.service";
import {ChaveDialogComponent} from "./chave-dialog/chave-dialog.component";
import {LocalDto} from "../../../../api/models/local-dto";
import {ChaveQrcodeComponent} from "./chave-qrcode/chave-qrcode.component";

@Component({
  selector: 'app-chave-lista',
  templateUrl: './chave.component.html',
  styleUrls: ['./chave.component.scss']
})
export class ChaveComponent implements OnInit{
  private localDto: LocalDto = { nome: "", numeroSala: 0, chaves:[], responsaveis: []};
  private chavesDto: ChaveDto[] = [];

  @Input()
  set local(value: LocalDto) {
    if(value){
      this.localDto = value;
    }else{
      this.localDto = { nome: "", numeroSala: 0, chaves:[], responsaveis: []}
    }
    this.chaves = this.localDto.chaves;
  };

  get local(): LocalDto {
    return this.localDto;
  }

  set chaves(value: ChaveDto[]){
    this.localDto.chaves = value.sort();
    this.chavesDto = this.localDto.chaves;
    this.chavesListaDataSource.data = this.chavesDto;
  }

  get chaves(): ChaveDto[] {
    return this.chavesDto;
  }
  @Output()
  onChangeChave: EventEmitter<ChaveDto[]> = new EventEmitter<ChaveDto[]>();

  colunasMostrar = ['numero', 'acao'];
  chavesListaDataSource: MatTableDataSource<ChaveDto> = new MatTableDataSource<ChaveDto>([]);
  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private localService: LocalControllerService) {
  }

  ngOnInit(): void {
  }

  confirmarExcluirChave(numero: number) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão da chave número: ${numero}?`,() => {
      this.removerChave(numero);
    })
  }

  private removerChave(numero: number): void{
    this.chavesDto = this.chavesDto.filter(value => value.numero != numero);
    this.onChangeChave.emit(this.chavesDto);
    this.salvarChave(this.chavesDto);
  }

  editarChave(element: ChaveDto) {
    const chave: ChaveDto = element;
    const chavesBase: ChaveDto[] = this.local.chaves.filter(value => value.numero !== element.numero);
    this.messageService.addDialogYesNo(
      ChaveDialogComponent, chave,
      "Salvar",(data) => {
        console.log("OK", data);

        const chaves = [...chavesBase, data];
        this.salvarChave(chaves);
      },
      "Cancelar", (data) =>{
        console.log("Cancelar", data);
      }, '25%', '25%'
    )
  }

  salvarChave(chaves: ChaveDto[]) {
    console.log(JSON.stringify(chaves));
    console.log(JSON.stringify(this.local));
    const chavesOld = this.local.chaves;
    this.chaves = chaves;
    this.localService.localControllerAlterarIdHash(
      {id: this.local.idHash || '', body: this.local}
    ).subscribe(
      value => this.local = value,
      error => {
        this.messageService.addMsgDanger(error.message);
        this.chaves = chavesOld;
      });
  }

  adicionarChave() {
    const chave: ChaveDto = {};
    this.messageService.addDialogYesNo(
      ChaveDialogComponent, chave,
      "Incluir",(data) => {
        console.log("OK", data);
        const chaves = [...this.chavesDto, data];
        this.salvarChave(chaves);
      },
      "Cancelar", (data) =>{
        console.log("Cancelar", data);
      }, '25%', '25%'
    )
  }

  exibirQRCode(chave: ChaveDto) {
    this.messageService.addDialogYesNo(
      ChaveQrcodeComponent, chave,
      "FECHAR",(data) => {
      },
      undefined,undefined, '300px', '30px'
    )
  }
}
