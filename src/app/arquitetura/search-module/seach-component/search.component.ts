import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchFieldValue} from "../../../api/models/search-field-value";
import {Observable, startWith} from "rxjs";
import {SearchField} from "../../../api/models/search-field";
import {SearchType, SearchTypeKey} from "../shared/search-type";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MessageService} from "../../message/message.service";
import {map} from "rxjs/operators";
import {ISearchFieldDataObject} from "../../../api/models/i-search-field-data-object";

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit{

  @Input() controller: any;
  @Output()
  onSearchResult: EventEmitter<any[]> = new EventEmitter<any[]>();


  searchFieldsActionMethod!: (params: {body: Array<SearchFieldValue>})
    => Observable<any>;

  searchFieldsListMethod!: (params: {}) => Observable<any>;

  formGroup!: FormGroup;

  searchFieldsParamters: SearchField[] = [];

  /*searchValue: string = '';
  searchParameter!: SearchField;
  searchConditionKey!: SearchTypeKey;*/
  searchParameterFiltered!: Observable<Array<ISearchFieldDataObject>>;


  searchConditionKeys: SearchTypeKey[] = Object.keys(SearchType).map((value: string) => value as SearchTypeKey);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {
    this.createForm();
    this._adapter.setLocale('pt-br');
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      searchValue: [null, [Validators.required]],
      searchParameter: [null, Validators.required],
      searchConditionKey: ['EQUAL', Validators.required],
    });
    this.formGroup.controls['searchParameter'].valueChanges.subscribe(value => {
      this.cleanSearch();
    });
  }


  search() {
    if(!this.formGroup.valid) return;
    let fieldSearchValue = this.getFieldSearchValue();
    fieldSearchValue =  typeof fieldSearchValue === 'string' ? fieldSearchValue : fieldSearchValue.id;
    this.searchFieldsActionMethod({body: [
      { name: this.getFieldSearchParameter().name,
        searchType:  this.getFieldSearchConditionKey(),
        type: this.getFieldSearchParameter().type,
        value: fieldSearchValue}]}).subscribe(value => {
        this.onSearchResult.emit(value);
    },() => this.onSearchResult.emit([]) );

  }

  private getFieldSearchValue() {
    return this.formGroup.controls['searchValue'].value;
  }

  private getFieldSearchConditionKey() {
    return this.formGroup.controls['searchConditionKey'].value;
  }

  private getFieldSearchParameter() {
    return this.formGroup.controls['searchParameter'].value;
  }

  ngOnInit(): void {
    this.searchParameterFiltered = this.formGroup.controls['searchValue'].valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.description;
        return name ? this._filter(name as string) : this.getFieldSearchParameter()?.valueList?.slice();
      }),
    );
  }

  private _filter(value: string): Array<ISearchFieldDataObject> {
    const filterValue = value.toLowerCase();

    return this.getFieldSearchParameter()?.valueList.filter((option: ISearchFieldDataObject) => option.description?.toLowerCase().includes(filterValue));
  }

  ngAfterViewInit(): void {
    this.initSearchMethods();
    this.initSearchFieldsParameters();
  }

  private initSearchFieldsParameters() {
    this.searchFieldsListMethod({}).subscribe(value => {
      this.searchFieldsParamters = value;
      this.formGroup.patchValue({searchParameter: this.searchFieldsParamters[0], searchConditionKey: "EQUAL"} );
      //this.searchConditionKey = "EQUAL";
    });
  }

  private initSearchMethods() {
    let allMethodNames = this.getAllMethodNames(this.controller);
    allMethodNames.forEach((method: any) => {
      if (method.endsWith('SearchFieldsAction')) {
        this.configureSearchFieldAction(method);
      }
      if (method.endsWith('SearchFieldsList')) {
        this.configureSearchFieldsList(method);
      }
    });
  }

  private configureSearchFieldsList(method: any) {
    this.searchFieldsListMethod = (params: {}): Observable<any> => {
      return this.controller[method](params);
    }
  }

  private configureSearchFieldAction(method: any) {
    this.searchFieldsActionMethod = (params: {
      body: Array<SearchFieldValue>
    }): Observable<any> => {
      return this.controller[method](params);
    }
  }

  getAllMethodNames(obj: any) {
    let methods = new Set();
    while (obj = Reflect.getPrototypeOf(obj)) {
      let keys = Reflect.ownKeys(obj)
      keys.forEach((k: any) => methods.add(k));
    }
    return methods;
  }

  protected readonly SearchType = SearchType;
  get showFieldSearch(): boolean {
    let b = !!this.formGroup.controls['searchParameter']?.value?.valueList;
    return b
  };

  searchAll() {
    this.searchFieldsActionMethod({body: [
        { name: this.searchFieldsParamters[0].name,
          searchType:  'ALL',
          type: this.searchFieldsParamters[0].type,
          value: ''}]}).subscribe(value => {
      this.onSearchResult.emit(value);
    },() => this.onSearchResult.emit([]) );
  }

  cleanSearch() {
    console.log("change, clean");
    let searchConditionKey:SearchTypeKey = this.getFieldSearchConditionKey();
    if(this.showFieldSearch){
      searchConditionKey = "EQUAL";
    }
    this.formGroup.patchValue({searchValue: '', searchConditionKey: searchConditionKey} );
  }

  getSearchValueDescription(option: ISearchFieldDataObject | null):string  {
    console.log(option);
    return option ? option.description||'': '';
  }
}
