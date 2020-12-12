import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Currency from '../entities/Currency';

const BASE_URL = 'http://localhost:8587/api/v1/change';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  changeCurrency(currency: Currency): Observable<Currency> {
    return this.httpClient.post<Currency>(`${BASE_URL}`, currency);
  }
}
