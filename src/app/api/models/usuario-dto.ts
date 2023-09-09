/* tslint:disable */
/* eslint-disable */
import { TelefoneUsuarioDto } from './telefone-usuario-dto';
import { UsuarioGrupoDto } from './usuario-grupo-dto';

/**
 * Entidade de transferência de Usuario
 */
export interface UsuarioDto {

  /**
   * Acesso do Usuário Bloqueado
   */
  acessoBloqueado?: boolean;

  /**
   * Data da última atualização do cadastro do Usuário
   */
  dataAtualizado?: string;

  /**
   * Data do cadastro do Usuário
   */
  dataCadastrado?: string;

  /**
   * Email do usuário
   */
  email?: string;

  /**
   * Grupos do Usuário
   */
  grupos?: Array<UsuarioGrupoDto>;

  /**
   * Código do Usuário
   */
  id?: string;

  /**
   * Login do Usuário
   */
  login?: string;

  /**
   * Nome do Usuário
   */
  nome?: string;

  /**
   * Código do Status do Usuário
   */
  status?: boolean;

  /**
   * Telefones do Usuário
   */
  telefones?: Array<TelefoneUsuarioDto>;
}
