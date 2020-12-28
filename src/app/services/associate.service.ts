import { HttpClient } from '@angular/common/http';
import { Associate } from './../models/associate.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor( private http: HttpClient ) {  }

  getAllAssociates(id:number): Observable<Associate[]> { 
    return this.http.get<Associate[]>(`${URL}/associates?manager=${id}`)  
  }

  getAllNewAssociates(id:number): Observable<Associate[]> { 
    return this.http.get<Associate[]>(`${URL}/associates/new?manager={id}`)  
  }
}


///associates/new?manager={id}

