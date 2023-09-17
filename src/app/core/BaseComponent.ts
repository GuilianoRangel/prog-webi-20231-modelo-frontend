
import {
  FX_FLEX_GT_XS,
  FX_FLEX_GT_SM,
  FX_FLEX_GT_MD,
  FX_FLEX_GT_LG,
  FX_FLEX_XL,
  PAGINATOR_PAGE_SIZE
} from '../app.constantes';
import {FormGroup} from "@angular/forms";
import {AcaoSistema} from "./acao-sistema.acao";
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentType} from "@angular/cdk/overlay";

/**
 * Classe abastrada para conter as principais constantes necessárias
 * aos componentes.
 */
export abstract class BaseComponent<MODELO>{
  public FX_FLEX_GT_XS = FX_FLEX_GT_XS;
  public FX_FLEX_GT_SM = FX_FLEX_GT_SM;
  public FX_FLEX_GT_MD = FX_FLEX_GT_MD;
  public FX_FLEX_GT_LG = FX_FLEX_GT_LG;
  public FX_FLEX_XL = FX_FLEX_XL;
  public PAGINATOR_PAGE_SIZE = PAGINATOR_PAGE_SIZE;

  public acaoSistema: AcaoSistema;

  public readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR = "Editar";

  constructor(
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    this.acaoSistema = new AcaoSistema(route);
  }
  public formGroup!: FormGroup;

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

}
