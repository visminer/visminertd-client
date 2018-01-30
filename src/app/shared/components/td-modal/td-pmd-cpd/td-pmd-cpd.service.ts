import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CPD } from '../../../models/CPD';

@Injectable()
export class TDPmdCpdService {

  constructor(private httpCli: HttpClient) { }

  getDuplications(commit: string, filehash: number): Observable<CPD[]> {
    return this.httpCli.get<CPD[]>(
      `http://localhost:3000/api/cpd/get/commit/${commit}/filehash/${filehash}`)
      .pipe(catchError(err => Observable.throw(err.message)));
  }

}
