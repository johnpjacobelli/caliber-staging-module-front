import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feedback } from './../../models/feedback-model/feedback.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  httpOptions = {
    headers: new HttpHeaders({})
  }

  constructor(private http :HttpClient) { }

  getFeedbackByAssociateId(id: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${environment.BASE_URL}feedback/${id}`)
      .pipe(
        catchError(this.handleError<Feedback[]>('getAllFeedback', []))
      );
  }

  addFeedback(feedback: Feedback): Observable<any> {
    console.log("this should be feedback");
    console.log(feedback);
    return this.http.post<any>(`${environment.BASE_URL}feedback/create`, feedback, this.httpOptions)
      .pipe(
        tap((newFeedback: Feedback) => console.log(newFeedback)), //captures the response and handles it if its a response
        catchError(this.handleError<any>('addFeedback')) //this handles if it is an error
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }

  deleteFeedback(feedbackId: number) : Observable<any> {
    return this.http.delete<any>(`${environment.BASE_URL}feedback/item/delete/${feedbackId}`)
      .pipe(
        catchError(this.handleError<any>('deleteFeedback'))
      );
  }
}
