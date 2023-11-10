import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from "../../../../../core/BaseComponent";
import {ChaveDto} from "../../../../../api/models/chave-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-responsavel-dialog',
  templateUrl: './responsavel-dialog.component.html',
  styleUrls: ['./responsavel-dialog.component.scss']
})
export class ResponsavelDialogComponent  extends BaseComponent<ChaveDto> implements OnInit{
  @Input()
  public data: any;

  constructor(
    protected override route: ActivatedRoute,
    protected override router: Router,
    private formBuilder: FormBuilder
  ) {
    super(route,router);
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      numero: [null,
        [Validators.required,
          Validators.min(1),
          Validators.max(100000)
        ]
      ]
    });
  }
  onSubmit() {

  }

  ngOnInit(): void {
    this.formGroup.patchValue(this.data);
  }
}
