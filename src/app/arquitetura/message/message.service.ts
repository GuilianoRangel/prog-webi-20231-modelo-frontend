/* tslint:disable:variable-name no-redundant-jsdoc */
import { Injectable, EventEmitter } from '@angular/core';

/**
 * Classe de representação de 'Mensagem'.
 *
 * @author Guiliano Rangel (UEG)
 */
export class Message {

  /**
   * Construtor da classe.
   *
   * @param code -
   * @param error -
   * @param message -
   * @param status -
   */
  constructor(
    public code?: string,
    public error?: string,
    public message?: string,
    public status?: number
  ) { }
}

/**
 * Classe de representação de 'Item de Mensagem'.
 *
 * @author Guiliano Rangel (UEG)
 */
export class MessageItem {

  public static ALERT_TYPE_INFO = 'info';
  public static ALERT_TYPE_DANGER = 'error';
  public static ALERT_TYPE_SUCCES = 'done';
  public static ALERT_TYPE_WARNING = 'warning';

  public static CONFIRM_TYPE_OK = 'confirm_ok';
  public static CONFIRM_TYPE_YES_NO = 'confirm_yes_no';

  private _msg: string;
  private _type: string;
  private _listenerNo?: ConfirmListener;
  private _listenerYesOk?: ConfirmListener;

  /**
   * Construtor da classe.
   *
   * @param msg -
   * @param type -
   * @param listenerYesOk -
   * @param listenerNo -
   */
  constructor(msg: string, type: string, listenerYesOk?: ConfirmListener, listenerNo?: ConfirmListener) {
    this._msg = msg;
    this._type = type;
    this._listenerNo = listenerNo;
    this._listenerYesOk = listenerYesOk;
  }

  /**
   * @returns msg
   */
  public get msg(): string {
    return this._msg;
  }

  /**
   * @returns type
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Execulta o callback para as ações 'OK/YES'.
   */
  public executYesOk(): void {
    if (this._listenerYesOk !== null && this._listenerYesOk !== undefined) {
      this._listenerYesOk();
    }
  }

  /**
   * Execulta o callback para a ação 'NO'.
   */
  public executNo(): void {
    if (this._listenerNo !== null && this._listenerNo !== undefined) {
      this._listenerNo();
    }
  }

  /**
   * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_OK'.
   *
   * @returns boolean
   */
  public isConfirmTypeOk(): boolean {
    return MessageItem.CONFIRM_TYPE_OK === this.type;
  }

  /**
   * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_YES_NO'.
   *
   * @returns boolean
   */
  public isConfirmTypeYesNo(): boolean {
    return MessageItem.CONFIRM_TYPE_YES_NO === this.type;
  }
}

/**
 * Interface 'Listener' que determina o contrato da função callback referente ao 'confirm-mesage'.
 *
 * @author Guiliano Rangel (UEG)
 */
export type ConfirmListener = () => void;

/**
 * Classe 'service' responsável por prover o recurso de mensagem da aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class MessageService {
  private msgEmitter: EventEmitter<MessageItem>;
  private confirmEmitter: EventEmitter<MessageItem>;

  /**
   * Construtor da classe.
   *
   * @param i18nPipe -
   */
  constructor() {
    this.msgEmitter = new EventEmitter();
    this.confirmEmitter = new EventEmitter();
  }

  /**
   * Retorna a descrição da mensagem conforme os parâmetros informados.
   *
   * @param msg -
   * @param params
   */
  public getDescription(msg: string, params?: any): string {
    console.log("msg:", msg);
    console.log("params", params);
    let description =  msg;
    return description;
  }

  /**
   * Adiciona o modal de confirmação segundo o type (confirm_ok, confirm_yes_no), informado.
   *
   * @param msg -
   * @param type -
   * @param params -
   * @param listenerYesOk
   * @param listenerNo
   */
  private addConfirm(msg: string, type: string, params: any, listenerYesOk?: ConfirmListener, listenerNo?: ConfirmListener): void {
    const description = this.getDescription(msg, params);

    if (description) {
      this.confirmEmitter.emit(new MessageItem(description, type, listenerYesOk, listenerNo));
    }
  }

  /**
   * Adiciona a mensagem segundo o type (alert-success, alert-info, alert-warning e alert-danger), informado.
   *
   * @param data
   * @param type -
   * @param params -
   */
  private addMsg(data: Message | string, type: string, params?: any): void {
    const msg = data instanceof Message ? data.message || "" : data;
    const description = this.getDescription(msg, params);

    if (description) {
      this.msgEmitter.emit(new MessageItem(description, type));
    }
  }

  /**
   * Adiciona o modal de confirmação OK.
   *
   * @param msg -
   * @param listenerOk -
   * @param params -
   */
  public addConfirmOk(msg: string, listenerOk?: ConfirmListener, params?: any): void {
    this.addConfirm(msg, MessageItem.CONFIRM_TYPE_OK, params, listenerOk);
  }

  /**
   * Adiciona o modal de confirmação YES/NO.
   *
   * @param msg -
   * @param listenerYes -
   * @param listenerNo -
   * @param params -
   */
  public addConfirmYesNo(msg: string, listenerYes?: ConfirmListener, listenerNo?: ConfirmListener, params?: any): void {
    this.addConfirm(msg, MessageItem.CONFIRM_TYPE_YES_NO, params, listenerYes, listenerNo);
  }

  /**
   * Adiciona mensagem de Sucesso.
   *
   * @param msg -
   * @param params -
   */
  public addMsgSuccess(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_SUCCES, params);
  }

  /**
   * Adiciona mensagem de Informação.
   *
   * @param msg -
   * @param params -
   */
  public addMsgInf(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_INFO, params);
  }

  /**
   * Adiciona mensagem de Alerta.
   *
   * @param msg -
   * @param params -
   */
  public addMsgWarning(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_WARNING, params);
  }

  /**
   * Adiciona mensagem de Erro.
   *
   * @param msg -
   * @param params -
   */
  public addMsgDanger(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_DANGER, params);
  }

  /**
   * @returns EventEmitter
   */
  public getMsgEmitter(): EventEmitter<MessageItem> {
    return this.msgEmitter;
  }

  /**
   * @returns EventEmitter
   */
  public getConfirmEmitter(): EventEmitter<MessageItem> {
    return this.confirmEmitter;
  }
}
