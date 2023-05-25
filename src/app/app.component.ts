import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoaderService} from "./arquitetura/loader/loader.service";
import {LoaderDialogComponent} from "./arquitetura/loader-dialog/loader-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'weg-prog-webi-faculdade-v3';

  private dialogRef!: MatDialogRef<any>;
  public constructor(
    private dialog: MatDialog,
    private loaderService: LoaderService
  ){}
  ngOnInit(): void {
    this.loaderService.onStart.subscribe(() => {
      this.dialogRef = this.dialog.open(LoaderDialogComponent, {
        minWidth: '50px',
        minHeight: '50px',
        hasBackdrop: true,
        disableClose: true
      });
    });

    this.loaderService.onStop.subscribe(() => {
      if (this.dialogRef !== undefined) {
        this.dialogRef.close();
      }
    });
  }
}
