/* tslint:disable */
/* eslint-disable */

/**
 * Entidade de transferência de Telefone
 */
export interface TelefoneUsuarioDto {

  /**
   * DDD do Telefone
   */
  ddd?: string;

  /**
   * Descrição do Tipo do Telefone
   */
  descricaoTipo?: string;

  /**
   * Código do Telefone
   */
  id?: string;

  /**
   * Código do Tipo do Telefone
   */
  idTipo?: number;

  /**
   * Código do Usuário
   */
  idUsuario?: string;

  /**
   * Número do Telefone
   */
  numero?: string;
}
