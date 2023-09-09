/* tslint:disable */
/* eslint-disable */
import { FuncionalidadeDto } from './funcionalidade-dto';

/**
 * Entidade de transferência de Modulos do sistema
 */
export interface ModuloSistemaDto {

  /**
   * Descrição do Status do Usuário
   */
  descricaoStatus?: string;

  /**
   * Lista de Funcionalidades do Módulo
   */
  funcionalidades?: Array<FuncionalidadeDto>;

  /**
   * Código do Modulo do sistema
   */
  id?: string;

  /**
   * Código do Status do Usuário
   */
  idStatus?: string;

  /**
   * Indica se o acordeon está aberto, onlyFront
   */
  isAccordionOpen?: boolean;

  /**
   * Código Mnemonico da Funcionalidade
   */
  mnemonico?: string;

  /**
   * Nome do Modulo do sistema
   */
  nome?: string;

  /**
   * Indica se todos os modulos estão checados, onlyFront
   */
  todosChecked?: boolean;
}
