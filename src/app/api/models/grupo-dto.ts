/* tslint:disable */
/* eslint-disable */
import { GrupoFuncionalidadeDto } from './grupo-funcionalidade-dto';

/**
 * Entidade de transferência de Grupo
 */
export interface GrupoDto {

  /**
   * indica se o Grupo de Usuários é de administradores
   */
  administrador?: boolean;

  /**
   * Descricao do Grupo de Usuários
   */
  descricao?: string;

  /**
   * Lista de Grupo Funcionalidades que o Grupo de usuário possui
   */
  grupoFuncionalidades?: Array<GrupoFuncionalidadeDto>;

  /**
   * Código do Grupo de Usuários
   */
  id?: number;

  /**
   * Nome do Grupo de usuários
   */
  nome?: string;

  /**
   * Código do Status do Grupo de Usuários
   */
  status?: boolean;
}
