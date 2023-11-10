export enum SearchType {
  CONTAINS = 'Contém',
  EQUAL = 'Igual',
  NOT_EQUAL = 'Diferente',
  BEGINS_WITH = 'Começa com',
  GREATER_THAN = 'Maior que',
  ALL = "Todos",
}
export type SearchTypeKey = keyof typeof SearchType;
//https://blog.logrocket.com/typescript-enums-vs-types/
