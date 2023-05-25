import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader.component';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
