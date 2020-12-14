import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CurrencyExchange from '../entities/CurrencyExchange';
import CurrencyDetails from '../entities/CurrencyDetails';

/* The URL for the currency exchange. */
const CHANGE_CURRENCY_URL = 'http://localhost:8587/api/v1/change';
/* The URL for the currency names. */
const ALL_CURRENCIES_URL = 'http://localhost:8587/api/v1/currencies';

/**
 *  Currency Service. 
 *  Sends request to the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  /**
   * @constructor
   * 
   * @param httpClient 
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a POST request to the backend.
   * Uses the CHANGE_CURRENCY_URL.
   * @param currency - sends a CurrencyExchange entity to the backend
   * 
   * @returns the actual value of the exchange
   */
  changeCurrency(currency: CurrencyExchange): Observable<CurrencyExchange> {
    return this.httpClient.post<CurrencyExchange>(`${CHANGE_CURRENCY_URL}`, currency);
  }

  /**
   * Sends a GET request to the backend.
   * Uses the ALL_CURRENCIES_URL.
   * 
   * @returns a list of Currencies
   */
  getAllCurrencies(): Observable<CurrencyDetails[]> {
    return this.httpClient.get<CurrencyDetails[]>(`${ALL_CURRENCIES_URL}`);
  }
}
