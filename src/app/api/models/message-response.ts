/* tslint:disable */
/* eslint-disable */
import { FieldResponse } from './field-response';
export interface MessageResponse {

  /**
   * Atributos de validação
   */
  attributes?: Array<FieldResponse>;

  /**
   * Código da Mensagem
   */
  code?: string;

  /**
   * Descrição erro HTTP
   */
  error?: string;

  /**
   * Mensagem de negócio
   */
  message?: string;

  /**
   * Parâmetros da mensagem
   */
  parameters?: Array<{
}>;

  /**
   * Status HTTP
   */
  status?: number;
}
