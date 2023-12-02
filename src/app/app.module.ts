import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './core/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TipoModule} from "./pages/tipo/tipo.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {LoaderModule} from "./arquitetura/loader/loader.module";
import {LoaderDialogComponent} from "./arquitetura/loader-dialog/loader-dialog.component";
import {AutenticacaoModule} from "./arquitetura/autenticacao/autenticacao.module";
import {SecurityModule} from "./arquitetura/security/security.module";
import {SecurityInterceptor} from "./arquitetura/security/security.interceptor";
import {MessageModule} from "./arquitetura/message/message.module";
import {AppInterceptor} from "./arquitetura/app.interceptor";
import {MaterialModule} from "./adminmodule/layouts/material.module";
import {AdministracaoModule} from "./adminmodule/administracao.module";
import {ValidationResourceProvider} from "./adminmodule/shared/validation/validation.resource";
import {AppMessage} from "./adminmodule/app.message";
import {HomeSharedKeysComponent} from "./pages/home/home-shared-keys.component";
import {LocalModule} from "./pages/local/local.module";
import {AmigoModule} from "./pages/amigo/amigo.module";
import {QRCodeModule} from "angularx-qrcode";
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { DateFnsModule } from 'ngx-date-fns';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {getPtBrPaginatorIntl} from "./arquitetura/component/portuguese-mat-paginator-intl";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSharedKeysComponent,
    LoaderDialogComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdministracaoModule,
    LocalModule,
    LoaderModule,
    TipoModule,
    AmigoModule,
    AutenticacaoModule,
    MessageModule.forRoot(),
    SecurityModule,//TODO conferir a configuração
    SecurityModule.forRoot({
      nameStorage: 'portalSSOSecurityStorage',
      loginRouter: '/acesso/login'
    }),
    DateFnsModule.forRoot()
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
    {
      provide: ValidationResourceProvider,
      useValue: AppMessage,
    },
    {
      provide: LOCALE_ID, useValue: 'pt'
    },
    {
      provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl()
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
registerLocaleData(localeBr, 'pt');

