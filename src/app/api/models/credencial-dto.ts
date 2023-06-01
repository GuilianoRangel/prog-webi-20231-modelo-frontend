/* tslint:disable */
/* eslint-disable */

/**
 * Representação de Credencial do Usuário
 */
export interface CredencialDto {

  /**
   * Token de acesso
   */
  accessToken?: string;

  /**
   * Email do Usário
   */
  email?: string;

  /**
   * Tempo de expiração do token de acesso
   */
  expiresIn?: number;

  /**
   * Id do Usuário
   */
  id?: number;

  /**
   * Login do Usuário
   */
  login?: string;

  /**
   * Nome do Usuário
   */
  nome?: string;

  /**
   * Tempo de expiração do token de refresh
   */
  refreshExpiresIn?: number;

  /**
   * Token de refresh
   */
  refreshToken?: string;

  /**
   * Lista de permissões do Usuário
   */
  roles?: Array<string>;

  /**
   * Indica se o usuário está ativo
   */
  statusAtivo?: boolean;
}
