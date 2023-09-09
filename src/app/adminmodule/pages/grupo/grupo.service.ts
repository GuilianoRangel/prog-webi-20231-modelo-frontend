/*
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object[]> {
    const url = `${environment.urlApi}/group`;
    return this.http.get<object[]>(url);
  }

  save(): Observable<object> {
    const url = `${environment.urlApi}/group`;
    return this.http.post<object>(url, {});
  }

  activate(): Observable<object> {
    const url = `${environment.urlApi}/group/activate`;
    return this.http.put<object>(url, {});
  }

  deactivate(): Observable<object> {
    const url = `${environment.urlApi}/group/inactivate`;
    return this.http.get<object>(url, {});
  }
}
*/
