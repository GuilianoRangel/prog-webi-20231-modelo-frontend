import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchFieldValue} from "../../../api/models/search-field-value";
import {Observable} from "rxjs";
import {SearchField} from "../../../api/models/search-field";
import {SearchType, SearchTypeKey} from "../shared/search-type";

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit{

  @Input() controller: any;
  @Output()
  onSearchResult: EventEmitter<any[]> = new EventEmitter<any[]>();

  searchFieldsActionMethod!: (params: {body: Array<SearchFieldValue>})
    => Observable<any>;

  searchFieldsListMethod!: (params: {}) => Observable<any>;

  searchFieldsParamters: SearchField[] = [];

  searchValue: string = '';
  searchParameter!: SearchField;
  searchConditionKey!: SearchTypeKey;

  searchConditionKeys: SearchTypeKey[] = Object.keys(SearchType).map(value => value as SearchTypeKey);

  search() {
    this.searchFieldsActionMethod({body: [
      { name: this.searchParameter.name,
        searchType:  this.searchConditionKey,
        type: this.searchParameter.type,
        value: this.searchValue}]}).subscribe(value => {
        this.onSearchResult.emit(value);
    },() => this.onSearchResult.emit([]) );

  }

  ngAfterViewInit(): void {
    this.initSearchMethods();
    this.initSearchFieldsParameters();
  }

  private initSearchFieldsParameters() {
    this.searchFieldsListMethod({}).subscribe(value => {
      this.searchFieldsParamters = value;
      this.searchParameter = this.searchFieldsParamters[0];
      this.searchConditionKey = "EQUAL";
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
      keys.forEach((k) => methods.add(k));
    }
    return methods;
  }

  protected readonly SearchType = SearchType;
  get showFieldSearch(): boolean {
    return !this.searchParameter?.valueList;
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
    this.searchValue = '';
  }
}
