import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
<<<<<<< HEAD
  constructor(private httpClient: HttpClient) {}

  getManagerId(email: string): Observable<string> {
    return this.httpClient.post<string>(
      `${environment.BASE_URL}manager`,
      email
    );
=======

  managerId: string;

  constructor(private client: HttpClient) {}

  /**
   * Post the manager to the database
   * @param email Manger's email;
   */
  postManager(email: string): Observable<ClientMessage> {
    type managerId = string;
    return this.client.post<ClientMessage>(`${environment.BASE_URL}getmanager`, new ClientMessage(email));
>>>>>>> 9ada54b4c229b0dab2bb5d4db7c6488d0b43d4db
  }
}
