import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TDItem } from './../../../shared/models/TDItem';

@Injectable()
export class TDTimelineService {

  constructor(private http: HttpClient) { }

  getFileDebtHistory(tdItem: TDItem): Observable<TDItem[]> {
    return this.http.get<TDItem[]>(
      `http://localhost:3000/api/technicaldebt/debt_history/repository/${tdItem.repository}/filehash/${tdItem.filehash}
/commit_date/${tdItem.commit_date.toString()}`)
    .pipe(
      catchError(err => [])
    );
  }

}
