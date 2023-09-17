import { Component } from '@angular/core';
import {LocalDto} from "../../../api/models/local-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {LocalControllerService} from "../../../api/services/local-controller.service";
import {ChaveDto} from "../../../api/models/chave-dto";
import {MessageService} from "../../../arquitetura/message/message.service";
import {ChaveDialogComponent} from "./chave/chave-dialog/chave-dialog.component";

@Component({
  selector: 'app-gerenciar-local',
  templateUrl: './gerenciar-local.component.html',
  styleUrls: ['./gerenciar-local.component.scss']
})
export class GerenciarLocalComponent {
  public local :LocalDto;
  constructor(
    public route: ActivatedRoute,
    protected router: Router) {
    this.local = route.snapshot.data['local'];
  }

  cancelar() {
    this.router.navigate(["/local"]);
  }


}
