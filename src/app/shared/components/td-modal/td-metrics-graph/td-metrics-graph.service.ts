import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CodeAnalysis } from './../../../models/CodeAnalysis';
import { TDItem } from './../../../models/TDItem';

@Injectable()
export class TDMetricsGraphService {

  constructor(private http: HttpClient) { }

  getAnalysisHistory(tdItem: TDItem): Observable<CodeAnalysis[]> {
    return this.http.get<CodeAnalysis[]>(
      `http://localhost:3000/api/code_analysis/analysis_history/repository/${tdItem.repository}/
filehash/${tdItem.filehash}/commit_date/${tdItem.commit_date.toString()}`)
    .pipe(catchError(err => []));
  }

}
