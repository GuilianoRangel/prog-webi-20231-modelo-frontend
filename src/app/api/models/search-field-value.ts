/* tslint:disable */
/* eslint-disable */
export interface SearchFieldValue {
  name?: string;
  searchType?: 'CONTAINS' | 'DOES_NOT_CONTAIN' | 'EQUAL' | 'NOT_EQUAL' | 'BEGINS_WITH' | 'DOES_NOT_BEGIN_WITH' | 'ENDS_WITH' | 'DOES_NOT_END_WITH' | 'NUL' | 'NOT_NULL' | 'GREATER_THAN' | 'GREATER_THAN_EQUAL' | 'LESS_THAN' | 'LESS_THAN_EQUAL' | 'ANY' | 'ALL';
  type?: string;
  value?: string;
}
