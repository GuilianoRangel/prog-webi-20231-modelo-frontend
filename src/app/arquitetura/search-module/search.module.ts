import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {SearchComponent} from "./seach-component/search.component";
import {SearchService} from "./shared/search.service";
import {MaterialModule} from "../../core/material.module";
import {ValidationModule} from "../../adminmodule/shared/validation/validation.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ValidationModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ]
})
export class SearchModule { }
