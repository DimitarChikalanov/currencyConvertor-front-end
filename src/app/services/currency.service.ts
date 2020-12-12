import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CurrencyExchange from '../entities/CurrencyExchange';
import CurrencyDetails from '../entities/CurrencyDetails';

const CHANGE_CURRENCY_URL = 'http://localhost:8587/api/v1/change';
const ALL_CURRENCIES_URL = 'http://localhost:8587/api/v1/currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  changeCurrency(currency: CurrencyExchange): Observable<CurrencyExchange> {
    return this.httpClient.post<CurrencyExchange>(`${CHANGE_CURRENCY_URL}`, currency);
  }

  getAllCurrencies(): Observable<CurrencyDetails[]> {
    return this.httpClient.get<CurrencyDetails[]>(`${ALL_CURRENCIES_URL}`);
  }
}
