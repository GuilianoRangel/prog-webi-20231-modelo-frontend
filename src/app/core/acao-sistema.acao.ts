/* tslint:disable:no-redundant-jsdoc */
import { ActivatedRoute } from '@angular/router';

/**
 * Enum com as possíveis representações de 'Ação'.
 */
export enum Acao {
  LISTAR = 'listar',
  INCLUIR = 'incluir',
  ALTERAR = 'alterar',
  VISUALIZAR = 'visualizar'
}

/**
 * Classe de controle 'Ação'.
 *
 * @author Guiliano Rangel (UEG)
 */
export class AcaoSistema {

  private acao!: Acao;

  /**
   * Construtor da classe.
   *
   * @param route
   */
  constructor(route?: ActivatedRoute) {

    if (route) {
      this.acao = route.snapshot.data['acao'];
    }
  }

  /**
   * Seta o valor da ação vigente.
   *
   * @param acao
   */
  public setAcao(acao: Acao): AcaoSistema {
    this.acao = acao;
    return this;
  }

  /**
   * Verifica se ação é referente a 'INCLUIR'.
   *
   * @return boolean
   */
  public isAcaoIncluir(): boolean {
    return Acao.INCLUIR === this.acao;
  }

  /**
   * Verifica se ação é referente a 'ALTERAR'.
   *
   * @return boolean
   */
  public isAcaoAlterar(): boolean {
    return Acao.ALTERAR === this.acao;
  }

  /**WW
   * Verifica se ação é referente a 'LISTAR'.
   *
   * @return boolean
   */
  public isAcaoListar(): boolean {
    return Acao.LISTAR === this.acao;
  }

  /**
   * Verifica se ação é referente a 'VISUALIZAR'.
   *
   * @return boolean
   */
  public isAcaoVisualizar(): boolean {
    return Acao.VISUALIZAR === this.acao;
  }
}
