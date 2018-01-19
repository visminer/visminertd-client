import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FilesReport } from '../shared/models/CodeAnalysisReport';
import { TDItem } from '../shared/models/TDItem';

const DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TDManagementService {

  DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getTDByRepoAndRef(repository: string, reference: string): Observable<TDItem[]> {
    return this.http.get<TDItem[]>(`http://localhost:3000/api/technicaldebt/repository/${repository}/reference/${reference}`)
    .pipe(
      catchError(err => [])
    );
  }

  payDebt(_id: string, debt: string, value: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/paydebt`,
    { _id: _id, debt: debt, value: value },
    DEFAULT_HEADER)
    .pipe(
      catchError(err => null)
    );
  }

  paidDebt(_id: string, debt: string, value: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/technicaldebt/paiddebt`,
    { _id: _id, debt: debt, value: value },
    DEFAULT_HEADER)
    .pipe(
      catchError(err => null)
    );
  }

}
