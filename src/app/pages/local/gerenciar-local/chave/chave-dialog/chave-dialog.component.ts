import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseComponent} from "../../../../../core/BaseComponent";
import {ChaveDto} from "../../../../../api/models/chave-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chave-dialog',
  templateUrl: './chave-dialog.component.html',
  styleUrls: ['./chave-dialog.component.scss']
})
export class ChaveDialogComponent extends BaseComponent<ChaveDto> implements OnInit{
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
