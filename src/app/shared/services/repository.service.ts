import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Repository } from './../model/Repository';

@Injectable()
export class RepositoryService {

  private url = 'http://localhost:3000/api/repository';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.url}/all`)
    .pipe(
      tap(repositories => console.log('feteched all repositories')),
      catchError(err => [])
    );
  }

}
