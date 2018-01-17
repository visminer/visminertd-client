import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TDReport } from '../shared/models/TDReport';
import { FilesReport } from '../shared/models/CodeAnalysisReport';

@Injectable()
export class TDManagementService {

  DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getTDReportByRepoAndRef(repository: string, reference: string): Observable<TDReport[]> {
    return this.http.get<TDReport[]>(`http://localhost:3000/api/technicaldebt_report/repository/${repository}/reference/${reference}`)
    .pipe(
      catchError(err => [])
    );
  }

}
