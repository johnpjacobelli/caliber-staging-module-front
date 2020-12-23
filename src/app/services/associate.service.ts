import { Associate } from './../associate.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { URL } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) {};

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllAssociates(id:number): Observable<Associate> {
    return this.http.post<Associate>(`${URL}/associates`, id)
  }

  getAllNewAssociates(){

  }
}
