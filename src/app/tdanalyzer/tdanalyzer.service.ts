import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TDItem } from './../shared/models/TDItem';

const DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TDAnalyzerService {

  constructor(private http: HttpClient) { }

  getTDItems(commit: string): Observable<TDItem[]> {
    return this.http.get<TDItem[]>(`http://localhost:3000/api/technicaldebt/commit/${commit}`).pipe(catchError(err => []));
  }

  getTDItemsByFilter(commit: string, request: any): Observable<TDItem[]> {
    return this.http.get<TDItem[]>(
      `http://localhost:3000/api/technicaldebt/commit/${commit}/indicators/${request.indicators}/checked/${request.checked}
/intentional/${request.intentional}`)
    .pipe(catchError(err => []));
  }

  confirmDebt(_id: string, debt: string): Observable<any> {
    return this.changeDebtStatus(_id, debt, 'confirmdebt');
  }

  removeDebt(_id: string, debt: string): Observable<any> {
    return this.changeDebtStatus(_id, debt, 'removedebt');
  }

  confirmAllDebt(commit: string): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/confirmall`,
    { commit: commit },
    DEFAULT_HEADER)
    .pipe(
      catchError(err => null)
    );
  }

  private changeDebtStatus(_id: string, debt: string, option: string): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/${option}`,
    { _id: _id, debt: debt },
    DEFAULT_HEADER)
    .pipe(
      catchError(err => null)
    );
  }

}
