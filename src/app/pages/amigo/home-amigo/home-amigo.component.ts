import { Component } from '@angular/core';
import {SecurityService} from "../../../arquitetura/security/security.service";

@Component({
  selector: 'app-home-amigo',
  templateUrl: './home-amigo.component.html',
  styleUrls: ['./home-amigo.component.scss']
})
export class HomeAmigoComponent {

  constructor(public securityService: SecurityService) {
  }

}
