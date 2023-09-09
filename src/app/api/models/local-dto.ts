/* tslint:disable */
/* eslint-disable */
import { ChaveDto } from './chave-dto';
export interface LocalDto {

  /**
   * Lista de chaves do local
   */
  chaves?: Array<ChaveDto>;

  /**
   * Descricao do Nome da sala
   */
  descricao?: string;

  /**
   * Identificador do objeto em Hash
   */
  idHash?: string;

  /**
   * Nome da sala
   */
  nome?: string;

  /**
   * Número identificador da sala
   */
  numeroSala?: number;
}
