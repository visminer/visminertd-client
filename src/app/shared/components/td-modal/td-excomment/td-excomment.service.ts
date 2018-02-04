import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ExComment } from './../../../models/ExComment';

@Injectable()
export class TDExcommentService {

  constructor(private httpCli: HttpClient) { }

  getComments(commit: string, filehash: number): Observable<ExComment> {
    return this.httpCli.get<ExComment>(
      `http://localhost:3000/api/excomment/get/commit/${commit}/filehash/${filehash}`)
      .pipe(catchError(err => Observable.throw(err.message)));
  }

}
