/* tslint:disable:no-redundant-jsdoc callable-types */
/**
 * Interface Provider responsável por permitir a centralização de mensagem de validação.
 *
 * @author Guiliano Rangel (UEG)
 */
export interface ValidationResource {

  /**
   * Retorna a 'mensagem' conforme a 'chave' informada.
   *
   * @param key
   * @returns string
   */
  getMessage(key: string): string;
}

/**
 * Interface 'Provider' responsável por prover instâncias de 'ValidationResource'.
 *
 * @author Guiliano Rangel (UEG)
 */
export interface ValidationResourceProvider {

  /**
   * Fábrica de instâncias de 'ValidationResource'.
   */
  new(): ValidationResource;
}

/**
 * Classe 'Provider' responsável por prover instâncias de 'ValidationResource'.
 *
 * @author Guiliano Rangel (UEG)
 */
export class ValidationResourceProvider implements ValidationResourceProvider { }
