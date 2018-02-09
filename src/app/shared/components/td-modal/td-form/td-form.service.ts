import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TDItem } from './../../../models/TDItem';

const DEFAULT_HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TDFormService {

  constructor(private http: HttpClient) { }

  updateTDItem(tdItem: TDItem): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/technicaldebt/update', tdItem, DEFAULT_HEADER)
    .pipe(catchError(err => null));
  }

}
