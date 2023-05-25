/* tslint:disable:no-redundant-jsdoc */
import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

/**
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-loader-dialog',
  templateUrl: './loader-dialog.component.html'
})
export class LoaderDialogComponent {

  /**
   * Construtor da classe.
   *
   * @param dialogRef
   */
  constructor(
    public dialogRef: MatDialogRef<LoaderDialogComponent>) { }

}
