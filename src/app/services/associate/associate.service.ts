import { HttpClient } from '@angular/common/http';
import { Associate } from '../../models/associate-model/associate.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from './../../../environments/environment.prod';
import { LOCAL_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor( private http: HttpClient ) {  }

  getAllAssociates(id:number): Observable<Associate[]> { 
    return this.http.get<Associate[]>(`${LOCAL_URL}/associates?manager=${id}`)  
  }

  getAllNewAssociates(id:number): Observable<Associate[]> { 
    return this.http.get<Associate[]>(`${LOCAL_URL}/associates/new?manager=${id}`)  
  }
}

