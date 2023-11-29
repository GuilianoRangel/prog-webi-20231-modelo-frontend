/* tslint:disable */
/* eslint-disable */
import { ISearchFieldDataObject } from './i-search-field-data-object';
export interface SearchField {
  autoComplete?: boolean;
  label?: string;
  name?: string;
  type?: string;
  valueList?: Array<ISearchFieldDataObject>;
}
