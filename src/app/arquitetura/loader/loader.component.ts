/* tslint:disable:component-selector no-redundant-jsdoc */
import { Component } from '@angular/core';

import { LoaderService } from './loader.service';

/**
 * Componente padrão do módulo de login.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'loader',
  template: `<div *ngIf="show" aria-labelledby="dialog-static-name" class="modal-loader modal fade in show"
                  role="dialog" tabindex="-1" aria-hidden="false" aria-modal="true" style="display: flex;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <img src="assets/arquitetura/imgs/ajax-loader.gif" alt="">
                  </div>
                </div>
              </div>
            </div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  private requestCount: number;

  /**
   * Construtor da classe.
   *
   * @param loaderService
   */
  constructor(private loaderService: LoaderService) {
    this.requestCount = 0;

    this.loaderService.onStart.subscribe(() => {
      ++this.requestCount;
    });

    this.loaderService.onStop.subscribe(() => {
      --this.requestCount;
    });
  }

  /**
   * @returns show
   */
  public get show(): boolean {
    return this.requestCount > 0;
  }
}
