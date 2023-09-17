import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoaderService} from "./arquitetura/loader/loader.service";
import {LoaderDialogComponent} from "./arquitetura/loader-dialog/loader-dialog.component";
import {SecurityService} from "./arquitetura/security/security.service";
import {AutenticacaoService} from "./arquitetura/autenticacao/autenticacao.service";
import {User} from "./arquitetura/security/User";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageDialog, MessageItem, MessageService} from "./arquitetura/message/message.service";
import {ConfirmDialogComponent} from "./arquitetura/message/confirm-mesage/confirm-dialog.component";
import {GenericDialogComponent} from "./arquitetura/message/generic-dialog/generic-dialog.component";
import {ComponentType} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'weg-prog-webi-faculdade-v3';

  private dialogRef!: MatDialogRef<any>;
  public constructor(
    private router: Router,
    private dialog: MatDialog,
    private loaderService: LoaderService,
    private autenticationService: AutenticacaoService,
    private securityService: SecurityService,
    private snackBar: MatSnackBar,
    private messageService: MessageService,
  ){}
  ngOnInit(): void {
    this.securityService.onRefresh.subscribe((refreshToken: string) => {

      this.autenticationService.refresh(refreshToken).subscribe(data => {
        const user: User = {
          id: data.id,
          nome: data.nome,
          login: data.login,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn,
          roles: data.roles
        };
        this.securityService.init(user);
      }, error => {
        console.log(error);
        this.messageService.addMsgInf(error);
      });
    });

    this.securityService.onForbidden.subscribe(() => {
      this.messageService.addMsgWarning("Sem acesso");
      //this.router.navigate([this.config.loginRouter]);
      this.router.navigate(['/acesso']);
    });

    this.securityService.onUnauthorized.subscribe(() => {
      this.messageService.addMsgWarning("Não autorizado!");
      this.router.navigate(['/']);
      this.securityService.invalidate();
    });
    this.securityService.init();


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
    this.messageService.getConfirmEmitter().subscribe((item: MessageItem) => this.addConfirmItem(item));
    this.messageService.getDialogEmitter().subscribe((item: MessageDialog) => this.addDialogItem(item));
  }

  /**
   * Adiciona o modal de confirmação a view.
   *
   * @param item
   */
  private addConfirmItem(item: MessageItem): void {
    this.dialog.open(ConfirmDialogComponent, {
      minWidth: '30%',
      minHeight: '30%',
      disableClose: true,
      data: {item}
    });
  }

  /**
   * Adiciona o Dialog a view.
   *
   * @param item
   */
  private addDialogItem(item: MessageDialog, minWidthParam: string = '30%', minHeightParam: string = '30%'): void {
    this.dialog.open(GenericDialogComponent, {
      minWidth: minWidthParam,
      minHeight: minHeightParam,
      disableClose: true,
      data: {item}
    });
  }
}
