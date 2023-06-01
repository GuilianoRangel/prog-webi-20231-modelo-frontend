import { InjectionToken } from '@angular/core';

export interface IConfig {
  nameStorage: string;
  loginRouter: string;
}

export type optionsConfig = Partial<IConfig>;

export const config: InjectionToken<string> = new InjectionToken('config');

export const NEW_CONFIG: InjectionToken<string> = new InjectionToken('NEW_CONFIG');

export const INITIAL_CONFIG: InjectionToken<IConfig> = new InjectionToken('INITIAL_CONFIG');

export const initialConfig: IConfig = {
  nameStorage: 'securityStorage',
  loginRouter: ''
};
