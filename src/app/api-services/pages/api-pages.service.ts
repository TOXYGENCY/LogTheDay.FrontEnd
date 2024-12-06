import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { Page } from '../../domain-models/Page';

@Injectable({providedIn: 'root'})
export class ApiPagesService extends BaseService {

  constructor(http: HttpClient) { super(http); }

  private chosenApi = this.apiUrl_v1;

  GetAll(): Observable<any> {
    return this.http.get(`${this.chosenApi}/pages`);
  }

  GetById(id: string): Observable<any> {
    return this.http.get(`${this.chosenApi}/pages/${id}`);
  }

  GetByOdataQuery(query: string): Observable<any> {
    return this.http.get(`${this.chosenApi}/pages?${query}`);
  }

  Replace(page: Page): Observable<any> {
    return this.http.put(`${this.chosenApi}/pages`, page);
  }

  ChangeInfo(id: string, newTitle: string, newDescription: string): Observable<any> {
    return this.http.post(`${this.chosenApi}/pages/${id}/infoChange`, { title: newTitle, description: newDescription });
  }

}
