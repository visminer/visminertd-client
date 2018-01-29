import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CheckStyle } from './../../../models/CheckStyle';

@Injectable()
export class TDCheckstyleService {

  constructor(private httpCli: HttpClient) { }

  getStyleProblems(commit: string, filehash: number): Observable<CheckStyle> {
    return this.httpCli.get<CheckStyle>(
      `http://localhost:3000/api/checkstyle/get/commit/${commit}/filehash/${filehash}`)
      .pipe(catchError(err => Observable.throw(err.message)));
  }

}
