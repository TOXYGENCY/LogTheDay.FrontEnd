import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl_v1 } from '../app.config';

@Injectable({ providedIn: 'root' })
export class BaseService {

  constructor(protected http: HttpClient) {
  }

  protected apiUrl_v1 = apiUrl_v1;
}
