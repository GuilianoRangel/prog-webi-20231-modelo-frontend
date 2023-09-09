/* tslint:disable:no-inferrable-types no-redundant-jsdoc */
export const STATUS_ATIVO: string = 'ATIVO';

export const STATUS_INATIVO: string = 'INATIVO';

export const STATUS_SIM: string = 'SIM';

export const STATUS_NAO: string = 'NAO';

/* ==== Layouts geral ==== */
export const FX_FLEX_GT_XS = '100';
export const FX_FLEX_GT_SM = '100';
export const FX_FLEX_GT_MD = '930px';
export const FX_FLEX_GT_LG = '930px';
export const FX_FLEX_XL = '1280PX';
export const PAGINATOR_PAGE_SIZE = 5;


/**
 * Classe que disponibiliza as constantes de Status na aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
export class StatusAtivoInativo {

  public static readonly ATIVO: StatusAtivoInativo = new StatusAtivoInativo(true, 'Ativo');

  public static readonly INATIVO: StatusAtivoInativo = new StatusAtivoInativo(false, 'Inativo');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: boolean,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Status SimNao na aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
export class StatusSimNao {

  public static readonly SIM: StatusSimNao = new StatusSimNao('S', 'Sim');

  public static readonly NAO: StatusSimNao = new StatusSimNao('N', 'Não');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Tipos de Telefone na aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
export class TipoTelefone {

  public static readonly CELULAR: TipoTelefone = new TipoTelefone('1', 'Celular');
  public static readonly RESIDENCIAL: TipoTelefone = new TipoTelefone('2', 'Residencial');
  public static readonly COMERCIAL: TipoTelefone = new TipoTelefone('3', 'Comercial');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}
