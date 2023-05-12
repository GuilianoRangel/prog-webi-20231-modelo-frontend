/* tslint:disable */
/* eslint-disable */
import { TipoDto } from './tipo-dto';
export interface LivroDto {
  dataPublicacao?: string;
  id?: number;
  status?: 'ATIVO' | 'INATIVO';
  tipo?: TipoDto;
  titulo?: string;
}
