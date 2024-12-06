import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { User } from '../../domain-models/User';

// В этом сервисе мы работаем с пользователями.
@Injectable({ providedIn: 'root' })
export class ApiUsersService extends BaseService {
  constructor(http: HttpClient) { super(http); }

  private chosenApi = this.apiUrl_v1;

  // Observable, потому что это аналог Task - асинхронный контейнер метода, который можно ожидать
  GetAll(): Observable<any> {
    return this.http.get(`${this.chosenApi}/users`);
  }

  GetById(id: string): Observable<any> {
    return this.http.get(`${this.chosenApi}/users/${id}`);
  }

  GetByOdataQuery(query: string): Observable<any> {
    return this.http.get(`${this.chosenApi}/users?${query}`);
  }

  ChangeName(id: string, newName: string): Observable<any> {
    return this.http.post(`${this.chosenApi}/users/${id}/nameChange`, { name: newName });
  }

  Authenticate(credentials: object): Observable<any> {
    return this.http.post(`${this.chosenApi}/users/auth`, credentials);
  }

  Register(credentials: object): Observable<any> {
    return this.http.post(`${this.chosenApi}/users/register`, credentials);
  }

  Replace(user: User): Observable<any> {
    return this.http.put(`${this.chosenApi}/users`, user);
  }

}