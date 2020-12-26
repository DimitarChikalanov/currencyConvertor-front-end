import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import CurrencyExchange from '../../entities/CurrencyExchange';
import CurrencyDetails from '../../entities/CurrencyDetails';

/* Base URL for currency. */
const BASE_URL = 'http://localhost:8088/api/v1';

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
   * @param httpClient - makes requests
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a POST request to the backend.
   * Uses the BASE_URL/change.
   * User must be logged in (requires JWT token).
   * @param currency - sends a CurrencyExchange entity to the backend
   * 
   * @returns the actual value of the exchange
   */
  changeCurrencyLoggedIn(currencyExchange: CurrencyExchange): Observable<CurrencyExchange> {
    
    return this.httpClient.post<CurrencyExchange>(`${BASE_URL}/change`, currencyExchange);
  }

  /**
   * Sends a POST request to the backend.
   * Uses the BASE_URL/convert.
   * User does NOT need to be logged in (Does not require JWT token).
   * @param currency - sends a CurrencyExchange entity to the backend
   * 
   * @returns the actual value of the exchange
   */
  changeCurrencyNotLoggedIn(currencyExchange: CurrencyExchange): Observable<CurrencyExchange> {

    return this.httpClient.post<CurrencyExchange>(`${BASE_URL}/convert`, currencyExchange);
  }

  /**
   * Sends a GET request to the backend.
   * Uses the BASE_URL/currencies.
   * 
   * @returns a list of Currencies
   */
  getAllCurrencies(): Observable<CurrencyDetails[]> {

    return this.httpClient.get<CurrencyDetails[]>(`${BASE_URL}/currencies`);
  }
}
