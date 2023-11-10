import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalDto} from "../../../../api/models/local-dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MessageService} from "../../../../arquitetura/message/message.service";
import {LocalControllerService} from "../../../../api/services/local-controller.service";
import {ResponsabilidadeDto} from "../../../../api/models/responsabilidade-dto";
import {isAfter, isBefore, parseISO} from "date-fns";
import {ResponsavelDialogComponent} from "./responsavel-dialog/responsavel-dialog.component";

@Component({
  selector: 'app-responsabilidade',
  templateUrl: './responsabilidade.component.html',
  styleUrls: ['./responsabilidade.component.scss']
})
export class ResponsabilidadeComponent  implements OnInit {
  private localDto: LocalDto = { nome: "", numeroSala: 0, chaves:[], responsaveis: []};
  private responsaveisDto: ResponsabilidadeDto[] = [];

  public mostrarTodos: boolean = false;

  @Input()
  set local(value: LocalDto) {
    if(value){
      this.localDto = value;
    }else{
      this.localDto = { nome: "", numeroSala: 0, chaves:[], responsaveis:[]}
    }
    this.responsaveis = this.localDto.responsaveis;
  };

  get local(): LocalDto {
    return this.localDto;
  }

  set responsaveis(value: ResponsabilidadeDto[]){
    this.localDto.responsaveis = value.sort();
    this.responsaveisDto = this.localDto.responsaveis;
    this.responsaveisListaDataSource.data = this.responsaveisDto.
    filter(value1 => {
      const dateIni = parseISO(value1.dataInicio||'' );
      const dateFim = parseISO(value1.dataFim || '');
      const dataAtual = new Date();
      return this.mostrarTodos ||
        (!value1?.dataFim || isAfter(dateFim,dataAtual) ) &&
        (!value1?.dataInicio || isBefore(dateIni, dataAtual));
    });
  }

  get responsaveis(): ResponsabilidadeDto[] {
    return this.responsaveisDto;
  }
  @Output()
  onChangeResponsaveis: EventEmitter<ResponsabilidadeDto[]> = new EventEmitter<ResponsabilidadeDto[]>();

  colunasMostrar = ['nome', 'alocacao', 'iniVigencia', 'fimVigencia', 'acao'];
  responsaveisListaDataSource: MatTableDataSource<ResponsabilidadeDto> = new MatTableDataSource<ResponsabilidadeDto>([]);
  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private localService: LocalControllerService) {
  }

  ngOnInit(): void {
  }

  confirmarFinalizarResponsabilidade(numero: number) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão da chave número: ${numero}?`,() => {
      this.removerChave(numero);
    })
  }

  private removerChave(sequencia: number): void{
    this.responsaveisDto = this.responsaveisDto.filter(value => value.sequencia != sequencia);
    this.onChangeResponsaveis.emit(this.responsaveisDto);
    this.salvarResponsaveis(this.responsaveisDto);
  }

  editarResponsavel(element: ResponsabilidadeDto) {
    const responsavel: ResponsabilidadeDto = element;
    const responsaveisBase: ResponsabilidadeDto[] = this.local.responsaveis.filter(value => value.sequencia !== element.sequencia);
    this.messageService.addDialogYesNo(
      ResponsavelDialogComponent, responsavel,
      "Salvar",(data) => {
        console.log("OK", data);

        const chaves = [...responsaveisBase, data];
        this.salvarResponsaveis(chaves);
      },
      "Cancelar", (data) =>{
        console.log("Cancelar", data);
      }, '25%', '25%'
    )
  }

  salvarResponsaveis(responsabilidades: ResponsabilidadeDto[]) {
    console.log(JSON.stringify(responsabilidades));
    console.log(JSON.stringify(this.local));
    const responsabilidadesOld = this.local.responsaveis;
    this.responsaveisDto = responsabilidades;
    this.localService.localControllerAlterarIdHash(
      {id: this.local.idHash || '', body: this.local}
    ).subscribe(
      value => this.local = value,
      error => {
        this.messageService.addMsgDanger(error.message);
        this.responsaveisDto = responsabilidadesOld;
      });
  }

  adicionarResponsavel() {
    const responsavel: ResponsabilidadeDto = {};
    this.messageService.addDialogYesNo(
      ResponsavelDialogComponent, responsavel,
      "Incluir",(data) => {
        console.log("OK", data);
        const responsaveis = [...this.responsaveisDto, data];
        this.salvarResponsaveis(responsaveis);
      },
      "Cancelar", (data) =>{
        console.log("Cancelar", data);
      }, '40%', '30%'
    )
  }

  toggleMostrarTodos() {
    this.mostrarTodos = !this.mostrarTodos;
    this.responsaveis = this.responsaveis;
  }

  protected readonly parseISO = parseISO;
}
