import {ValidationResource} from "./shared/validation/validation.resource";

/**
 * Implementação responsável por prover as 'descrições' e 'mensagens' utilizadas na aplicação em um único local.
 *
 * @author Guiliano Rangel (UEG)
 */
export class AppMessage implements ValidationResource {

  private resource: any;

  /**
   * Construtor da classe.
   */
  constructor() {
    this.resource = {
      // PAGINATOR
      PAGINATOR_ITENS_POR_PAGINA: 'Itens por página',
      PAGINATOR_PROXIMA_PAGINA: 'Próxima página',
      PAGINATOR_PAGINA_ANTERIOR: 'Página anterior',
      PAGINATOR_ULTIMA_PAGINA: 'Última página',
      PAGINATOR_PRIMEIRA_PAGINA: 'Primeira página',

      // Validation
      required: 'Campo obrigat\u00F3rio n\u00E3o preenchido.',
      minlength: 'Total de caracteres inferior ao tamanho mínimo.',
      maxlength: 'Total de caracteres excede o tamanho máximo.',
      'Mask error': 'Valor inválido',
    };
  }

  /**
   * Retorna a 'descrição' conforme a 'chave' informada.
   *
   * @param key -
   * @returns -
   */
  getDescription(key: string): string {
    return this.resource[key];
  }

  /**
   * Retorna a 'mensagem' conforme a 'chave' informada.
   *
   * @param key -
   * @returns -
   */
  getMessage(key: string): string {
    return this.getDescription(key);
  }
}
