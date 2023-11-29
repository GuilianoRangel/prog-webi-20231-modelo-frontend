import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListAmigoComponent} from './list-amigo/list-amigo.component';
import {HomeAmigoComponent} from './home-amigo/home-amigo.component';
import {RouterModule} from "@angular/router";
import {AmigoRoutes} from "./amigo-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {FormAmigoComponent} from './form-amigo/form-amigo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {ValidationModule} from "../../adminmodule/shared/validation/validation.module";
import {TipoResolve} from "./shared/tipo-resolve.service";
import {SearchModule} from "../../arquitetura/search-module/search.module";
import {MaterialModule} from "../../core/material.module";

@NgModule({
  declarations: [
    ListAmigoComponent,
    HomeAmigoComponent,
    FormAmigoComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AmigoRoutes),
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ValidationModule,
        SearchModule,
        MaterialModule
    ],
  providers: [
    TipoResolve
  ]
})
export class AmigoModule { }
