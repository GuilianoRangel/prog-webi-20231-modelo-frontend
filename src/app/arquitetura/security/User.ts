/**
 * Interface com a representação de 'Usuário'.
 *
 * @author Guiliano Rangel (UEG)
 */
export interface User {
  id: number;
  nome: string;
  login: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  roles?: string[];
}
