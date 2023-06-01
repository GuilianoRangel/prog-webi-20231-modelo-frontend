/* tslint:disable */
/* eslint-disable */

/**
 * Informações da Redefinição de Senha
 */
export interface UsuarioSenhaDto {

  /**
   * Confirmar Senha
   */
  confirmarSenha?: string;

  /**
   * E-mail do Usuário onde a solicitação de senha foi enviada. (Campo não será considerado como parâmetro de entrada)
   */
  email?: string;

  /**
   * Nova Senha
   */
  novaSenha?: string;

  /**
   * Senha Antiga
   */
  senhaAntiga?: string;
}
