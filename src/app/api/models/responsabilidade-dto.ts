/* tslint:disable */
/* eslint-disable */
import { FuncionarioDto } from './funcionario-dto';

/**
 * Lista de responsaveis do local
 */
export interface ResponsabilidadeDto {
  ativo?: boolean;
  dataFim?: string;
  dataInicio?: string;
  funcionario?: FuncionarioDto;
  sequencia?: number;
}
