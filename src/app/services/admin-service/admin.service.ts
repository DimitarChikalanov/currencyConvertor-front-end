import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import DeleteCurrency from 'src/app/entities/DeleteCurrency';
import NewCurrency from 'src/app/entities/NewCurrency';

/* Base URL for admin functionality with currency. */
const BASE_URL = 'http://localhost:8088/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  /**
   * @constructor
   * 
   * @param httpClient - makes requests
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Creates and adds a new currency to the list of currencies.
   * 
   * @returns rends a post request to the back end
   */
  addNewCurrency(newCurrency: NewCurrency): Observable<NewCurrency> {

    return this.httpClient.post<NewCurrency>(`${BASE_URL}/update`, newCurrency);
  }

  deleteCurrency(deleteCurrency: DeleteCurrency): Observable<Object> {

    return this.httpClient.delete(`${BASE_URL}/delete`);
  }
}
