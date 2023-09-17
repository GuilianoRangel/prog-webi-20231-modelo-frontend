import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

import { MessageService } from './message.service';
import {AlertMessageComponent} from './alert-message/alert-message.component';
import {ConfirmDialogComponent} from './confirm-mesage/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

/**
 * Módulo responsável por prover recursos de 'mensagens' e 'i18n'.
 *
 * @author Guiliano Rangel (UEG)
 */
@NgModule({
  //entryComponents: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    AlertMessageComponent,
    ConfirmDialogComponent,
    GenericDialogComponent
  ],
  exports: [
    AlertMessageComponent,
    ConfirmDialogComponent
  ]
})
export class MessageModule {

  /**
   * Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
   */
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: MessageModule,
      providers: [
        MessageService,
        ConfirmDialogComponent,
        AlertMessageComponent
      ]
    };
  }
}
