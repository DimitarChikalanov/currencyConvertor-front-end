import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import User from '../../entities/User';

/* Base URL for user profile info. */
const BASE_URL = "http://localhost:8088/api/v1";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  /**
   * @constructor
   * 
   * @param httpClient - makes requests
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a GET request to the backend.
   * Uses the BASE_URL/profile.
   * User must be logged in (requires JWT token).
   * 
   * @returns user details (as user object)
   */
  getUserProfile(): Observable<User> {

    return this.httpClient.get<User>(`${BASE_URL}/profile`);
  }

  /**
   * Sends a POST request to the backend.
   * Updates the user profile information.
   * Uses the BASE_URL/update.
   * User must be logged in (requires JWT token).
   * @param user - a user object to be updated
   * 
   * @returns user details (as user object)
   */
  updateUserProfile(user: User): Observable<User>{

    return this.httpClient.put<User>(`${BASE_URL}/update`, user);
  }
}
