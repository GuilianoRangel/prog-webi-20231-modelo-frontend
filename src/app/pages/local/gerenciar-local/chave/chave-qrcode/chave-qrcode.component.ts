import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chave-qrcode',
  templateUrl: './chave-qrcode.component.html',
  styleUrls: ['./chave-qrcode.component.scss']
})
export class ChaveQrcodeComponent {
  @Input()
  public data: any;
}
