import {
  ChangeDetectorRef,
  Component, ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  OnDestroy, OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MessageDialog, MessageItem} from "../message.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {BaseComponent} from "../../../core/BaseComponent";

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent implements OnDestroy{
  @ViewChild("dialogContainer", { read: ViewContainerRef }) dialogContainer!: ViewContainerRef;
  componentRef!: ComponentRef<any>;
  public item: MessageDialog;

  /**
   * Construtor da classe.
   *
   * @param dialogRef
   * @param data
   * @param cd
   */
  constructor(
    private dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: ConfirmationGenericDialogData,
    private cd: ChangeDetectorRef
  ) {
    console.log("data:", data);
    this.item = data.item;
  }

  /**
   * Execulta o callback para as ações 'OK/YES'.
   */
  public onConfirmYesOk(): void {
    let ok = true;
    if(this.componentRef.instance instanceof BaseComponent){
      let formGroup = (this.componentRef.instance as BaseComponent<any>).formGroup;
      ok = formGroup.valid;
      this.item.data = formGroup.value;
    }
    if(ok){
      this.dialogRef.close();
      this.item.executYesOk();
    }
  }

  /**
   * Execulta o callback para a ação 'NO'.
   */
  public onConfirmNo(): void {
    if(this.componentRef.instance instanceof BaseComponent){
      let formGroup = (this.componentRef.instance as BaseComponent<any>).formGroup;
      this.item.data = formGroup.value;
    }
    this.dialogRef.close();
    this.item.executNo();
  }

  ngAfterViewInit(): void {
    this.dialogContainer.clear();

    this.componentRef = this.dialogContainer.createComponent(this.item.dialog);

    this.componentRef.instance.data = this.item.data;

    this.cd.detectChanges();
    //this.componentRef.instance.output.subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.dialogContainer.remove();
  }
}

export interface ConfirmationGenericDialogData {
  minWidth: string,
  minHeight: string,
  disableClose: boolean,
  item: MessageDialog
}
