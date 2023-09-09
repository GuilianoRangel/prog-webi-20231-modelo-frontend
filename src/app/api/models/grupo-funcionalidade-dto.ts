/* tslint:disable */
/* eslint-disable */
import { FuncionalidadeDto } from './funcionalidade-dto';

/**
 * Entidade de transferência de Grupo funcionalidades
 */
export interface GrupoFuncionalidadeDto {
  funcionalidade?: FuncionalidadeDto;

  /**
   * Código do Grupo Funcionalidade
   */
  id?: string;

  /**
   * Código do Grupo
   */
  idGrupo?: string;
}
