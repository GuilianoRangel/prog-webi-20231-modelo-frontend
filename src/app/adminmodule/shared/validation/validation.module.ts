import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ValidationMessageComponent } from './validation-message/validation-message.component';
import {MaterialModule} from '../../layouts/material.module';

/**
 * Módulo responsável por prover recursos para simplificar a validação de campos nos formulários do sistema.
 *
 * @author Guiliano Rangel (UEG)
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [ValidationMessageComponent],
  exports: [ValidationMessageComponent]
})
export class ValidationModule { }
