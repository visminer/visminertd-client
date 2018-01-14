import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repository } from './../../models/Repository';
import { Reference } from '../../models/Reference';

@Injectable()
export class SidebarService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>('http://localhost:3000/api/repository/all')
    .pipe(
      catchError(err => [])
    );
  }

  getReferences(repository_id: string): Observable<Reference[]> {
    return this.http.get<Reference[]>(`http://localhost:3000/api/reference/repository/${repository_id}/sorted`)
    .pipe(
      catchError(err => [])
    );
  }

}
