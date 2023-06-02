import { Component } from '@angular/core';
import {SecurityService} from "../../../arquitetura/security/security.service";

@Component({
  selector: 'app-home-tipo',
  templateUrl: './home-tipo.component.html',
  styleUrls: ['./home-tipo.component.scss']
})
export class HomeTipoComponent {

  constructor(public securityService: SecurityService) {
  }

}
