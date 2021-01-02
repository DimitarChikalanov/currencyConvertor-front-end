import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ExchangeHistory from 'src/app/entities/ExchangeHistory';

const BASE_URL = 'http://localhost:8088/api/history';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHistoryService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a GET request to the backend.
   * Uses the BASE_URL/currencies.
   * 
   * @returns the list of conversion history
   */
  getAllHistory(): Observable<ExchangeHistory[]> {

    return this.httpClient.get<ExchangeHistory[]>(`${BASE_URL}/all`);
  }
}
