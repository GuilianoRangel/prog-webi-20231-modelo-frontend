import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./seach-component/search.component";
import {SearchService} from "./shared/search.service";
import {MaterialModule} from "../../core/material.module";
import {ValidationModule} from "../../adminmodule/shared/validation/validation.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ValidationModule
  ]
})
export class SearchModule { }
