/* tslint:disable:component-selector no-shadowed-variable no-redundant-jsdoc variable-name */
import {Component, Input, Injector, AfterViewInit} from '@angular/core';

import { ValidationResourceProvider, ValidationResource } from '../validation.resource';
import {MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

/**
 * Component responsável por prover o recurso de visualização de mensagem de validação, sendo capaz de
 * detectar o erro e a mensagem a ser apresentada.
 */
@Component({
  selector: '[validationMessage]',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements AfterViewInit {

  @Input() submitted: boolean = false;
  inputRef!: MatFormFieldControl<MatInput>;

  private validationResource: ValidationResource;

  /**
   * Construtor da classe.
   *
   * @param _inj
   * @param ValidationResource
   */
  constructor(
    private _inj: Injector,
    ValidationResource: ValidationResourceProvider
  ) {
    this.validationResource = new ValidationResource();
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngAfterViewInit() {
    // grab reference to MatFormField directive, where form control is accessible.
    const container = this._inj.get(MatFormField);
    this.inputRef = container._control;

    // sub to the control's status stream
    this.inputRef.ngControl?.valueChanges?.subscribe(value => this.removerEspacosString(value));
    // this.inputRef.ngControl.statusChanges.subscribe(this.updateErrors);
  }

  /**
   * Remove os espaços em branco caso seja identificado que 'string' está vazia.
   *
   * @param value
   */
  private removerEspacosString(value: any): void {
    if (value !== undefined && typeof value === 'string' && value.trim().length === 0) {
      this.inputRef.ngControl?.reset({ value: undefined, disabled: false });
    }
  }

  /**
   * Retorna a mensagem conforme o erro detectado.
   */
  public errors(): string[] {
    const errors = [];

    if (this.inputRef.ngControl && this.inputRef.ngControl.errors !== null) {
      for (const error of Object.keys(this.inputRef.ngControl.errors)) {
        if (this.inputRef.ngControl.hasError(error)) {
          let message = this.validationResource.getMessage(error);

          if (message === undefined) {
            message = error;
          }
          errors.push(message);
        }
      }
    }
    return errors;
  }
}
