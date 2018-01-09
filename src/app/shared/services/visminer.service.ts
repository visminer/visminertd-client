import { Injectable } from '@angular/core';

import { Repository } from './../models/Repository';
import { Reference } from './../models/Reference';

@Injectable()
export class VisminerService {

  constructor() { }

  repository: Repository = null;
  references: Reference[] = [];

  addReference(reference: Reference): void {
    const index = this.references.indexOf(reference);
    if (index >= 0) {
      this.references.splice(index, 1);
    } else {
      this.references.push(reference);
    }
  }

}
