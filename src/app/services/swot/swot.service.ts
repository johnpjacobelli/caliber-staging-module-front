import { BASE_URL } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Swot } from './../../models/swot-model/swot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SwotService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type',
      }
    )
  }

 

  constructor(private http :HttpClient) { }



  addSwot(swotAnalysis: Swot): Observable<any> {

    //let body = JSON.stringify(swotAnalysis)
    console.log(swotAnalysis)
    console.log("Hey grayson")
    return this.http.post<any>(`${BASE_URL}swot/create`, swotAnalysis, this.httpOptions)
      .pipe(
        tap((newSwotAnalysis: Swot) => console.log(newSwotAnalysis)),
        catchError(this.handleError<any>('addSwot'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }





}



