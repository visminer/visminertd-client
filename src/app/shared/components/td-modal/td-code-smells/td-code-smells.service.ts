import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CodeAnalysis } from './../../../models/CodeAnalysis';

@Injectable()
export class TDCodeSmellsService {

  constructor(private httpCli: HttpClient) { }

  getCodeAnalysis(commit: string, filehash: number): Observable<CodeAnalysis> {
    return this.httpCli.get<CodeAnalysis>(
      `http://localhost:3000/api/code_analysis/get/commit/${commit}/filehash/${filehash}`)
      .pipe(catchError(err => Observable.throw(err.message)));
  }

}
