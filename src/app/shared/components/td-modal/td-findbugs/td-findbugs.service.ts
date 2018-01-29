import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FindBugs } from './../../../models/FindBugs';

@Injectable()
export class TDFindbugsService {

  constructor(private httpCli: HttpClient) { }

  getBugs(commit: string, filehash: number): Observable<FindBugs> {
    return this.httpCli.get<FindBugs>(
      `http://localhost:3000/api/findbugs/get/commit/${commit}/filehash/${filehash}`)
      .pipe(catchError(err => Observable.throw(err.message)));
  }

}
