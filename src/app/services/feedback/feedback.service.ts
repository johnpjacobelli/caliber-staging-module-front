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

  constructor(private http: HttpClient) { }

  getFeedbackByAssociateId(id: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${environment.BASE_URL}feedback/associate/${id}`)
      .pipe(
        catchError(this.handleError<Feedback[]>('getAllFeedback', []))
      );
  }

  addFeedback(feedback: Feedback): Observable<Feedback> {
    console.log("Was in addFeedback");
    let feedbackDTO = {
      id: feedback.id,
      managerId: feedback.managerId,
      content: feedback.content,
      associateId: feedback.associateId,
    }
    console.log(feedback);
    let associateId = feedback.associateId;
    return this.http.post<Feedback>(`${environment.BASE_URL}feedback/${associateId}`, feedbackDTO, this.httpOptions)
      .pipe(
        catchError(this.handleError<Feedback>('addFeedback'))
      )
  }

  deleteFeedback(feedbackId: number): Observable<string> {
    const httpoptions = { responseType: "text" as "json" }
    return this.http.delete<string>(`${environment.BASE_URL}feedback/${feedbackId}`, httpoptions)
      .pipe(catchError(this.handleError<string>("deleteFeedback"))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }
}
