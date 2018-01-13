import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TDReport } from '../shared/models/TDReport';

@Injectable()
export class TDEvolutionService {

  DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getTDReport(repository: string): Observable<TDReport[]> {
    return this.http.get<TDReport[]>(`http://localhost:3000/api/technicaldebt_report/repository/${repository}`)
    .pipe(
      catchError(err => [])
    );
  }

}
