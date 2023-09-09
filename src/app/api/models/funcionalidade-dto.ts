/* tslint:disable */
/* eslint-disable */

/**
 * Entidade de transferência de Funcionalidade
 */
export interface FuncionalidadeDto {

  /**
   * Indica se a funcionalidade está marcada, OnlyFront
   */
  checked?: boolean;

  /**
   * Descrição do Status do Usuário
   */
  descricaoStatus?: string;

  /**
   * Código da Funcionalidade
   */
  id?: string;

  /**
   * Código do Status do Usuário
   */
  idStatus?: string;

  /**
   * Código Mnemonico da Funcionalidade
   */
  mnemonico?: string;

  /**
   * Nome da Funcionalidade
   */
  nome?: string;
}
