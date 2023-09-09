/* tslint:disable */
/* eslint-disable */

/**
 * Dados do filtro de pesquisa de Grupos
 */
export interface FiltroGrupoDto {

  /**
   * Grupo ativo
   */
  ativo?: boolean;

  /**
   * Identificação do Módulo
   */
  idModulo?: number;

  /**
   * Id usuario logado
   */
  idUsuario?: number;

  /**
   * Nome do Grupo
   */
  nome?: string;
}
