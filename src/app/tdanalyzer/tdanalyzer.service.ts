import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TDItem } from './../shared/models/TDItem';

const DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TDAnalyzerService {

  constructor(private http: HttpClient) { }

  getTDItems(commit: string, filter?: any): Observable<TDItem[]> {
    let url = `http://localhost:3000/api/technicaldebt/commit/${commit}`;

    if (filter) {
      url += `/indicators/${filter.indicators}/checked/${filter.checked}/intentional/${filter.intentional}`;
    }

    return this.http.get<TDItem[]>(url).pipe(catchError(err => []));
  }

  confirmDebt(_id: string, debt: string): Observable<any> {
    return this.changeDebtStatus(_id, debt, 'confirmdebt');
  }

  removeDebt(_id: string, debt: string): Observable<any> {
    return this.changeDebtStatus(_id, debt, 'removedebt');
  }

  confirmAllDebt(commit: string, filter?: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/confirmall`,
    { commit: commit, filter: filter },
    DEFAULT_HEADER)
    .pipe(catchError(err => null));
  }

  private changeDebtStatus(_id: string, debt: string, option: string): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/${option}`,
    { _id: _id, debt: debt },
    DEFAULT_HEADER)
    .pipe(catchError(err => null));
  }

}
