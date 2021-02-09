import { Observable, of } from 'rxjs';
import { Swot } from './../../models/swot-model/swot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { SwotItem } from 'src/app/models/swot-model/swot-item';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SwotService {

  httpOptions = {
    headers: new HttpHeaders({})
  }

 

  constructor(private http :HttpClient) { }

/**
 * This creates a swot object to be sent to the backend
 * @param swotAnalysis - the swot to be added to the database
 */
  addSwot(swotAnalysis: Swot): Observable<any> {
    console.log("this should be a swot");
    console.log(swotAnalysis)
    return this.http.post<any>(`${environment.BASE_URL}swot/create`, swotAnalysis, this.httpOptions)
      .pipe(
        tap((newSwotAnalysis: Swot) => console.log(newSwotAnalysis)), //captures the response and handles it if its a response
        catchError(this.handleError<any>('addSwot')) //this handles if it is an error
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }

  getSwotByAssociatedId(id: number): Observable<Swot[]> {
    return this.http.get<Swot[]>(`${environment.BASE_URL}swot/view/${id}`)
      .pipe(
        catchError(this.handleError<Swot[]>('getAllSwots', []))
      );
  }

  getItem(id: number): Observable<SwotItem> {
    console.log(id);
    return this.http.post<SwotItem>(`${environment.BASE_URL}getSwotItem`, {id: id}, this.httpOptions)
      .pipe(
        catchError(this.handleError<SwotItem>('getTask'))
      );
  }

  updateItem(swotItem: SwotItem): Observable<SwotItem> {
    let swotItemDTO = {
      id: swotItem.id,
      name: swotItem.name,
      type: swotItem.type,
      note: swotItem.note,
      swot: {
        id: swotItem.swotAnalysisId
      }
    }
    return this.http.put<SwotItem>(`${environment.BASE_URL}swot/item/update/${swotItemDTO.id}`, swotItemDTO, this.httpOptions)
      .pipe(
        catchError(this.handleError<SwotItem>('updateSwot'))
      );
  }

  addItem(swotItem: SwotItem): Observable<SwotItem> {
    let swotItemDTO = {
      id: swotItem.id,
      name: swotItem.name,
      type: swotItem.type,
      note: swotItem.note,
      swot: {
        id: swotItem.swotAnalysisId
      }
    }
    console.log(swotItem);
    return this.http.post<SwotItem>(`${environment.BASE_URL}swot/item/new`, swotItemDTO, this.httpOptions)
    .pipe(
      catchError(this.handleError<SwotItem>('addSwotItem'))
    )
  }

  deleteItem(swotItemId : number) : Observable<any> {
    return this.http.delete<any>(`${environment.BASE_URL}swot/item/delete/${swotItemId}`)
      .pipe(
        catchError(this.handleError<any>('deleteSwotItem'))
      );
  }

}



