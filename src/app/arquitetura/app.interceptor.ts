/* tslint:disable:no-redundant-jsdoc callable-types */
/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import {Message} from './message/message.service';


/**
 * Implementação responsável por interceptar as requisições Http.
 */
@Injectable()
export class AppInterceptor implements HttpInterceptor {

    /**
     * Construtor da classe.
     */
    constructor() { }

    /**
     * Método responsável por interceptar a requisição Http.
     *
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((response: HttpErrorResponse): Observable<HttpEvent<Message>> => {
            console.log('intercept', response);
            const messageTO = Object.assign(new Message(), response.error);

            if (messageTO.status === 401 || messageTO.status === 403) {
                delete messageTO.message;
            }
            return throwError(messageTO);
        }));
    }
}
