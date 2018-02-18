import { Injectable } from '@angular/core';

import { Repository } from './../models/Repository';
import { Reference } from './../models/Reference';

@Injectable()
export class VisminerService {
  
  constructor() { 
    this.repository = JSON.parse(localStorage.getItem('repository'));
    let cachedReferences = JSON.parse(localStorage.getItem('references'));
    if (cachedReferences) {
      this.references = cachedReferences;
    }  
  }

  repository: Repository = null;
  references: Reference[] = [];

  addReference(reference: Reference): void {
    const index = this.getReferenceIndex(reference);
    if (index >= 0) {
      this.references.splice(index, 1);
    } else {
      this.references.push(reference);
      this.references.sort((ref1,ref2) => ref1.commitsLength - ref2.commitsLength);
    }
    localStorage.setItem('references', JSON.stringify(this.references));
  }

  getReferenceIndex(reference: Reference): number {
    if (!this.references)
      return -1;

    for (let i = 0; i < this.references.length; i++) {
      if (reference._id == this.references[i]._id) {
        return i;
      }
    }
    return -1;
  }

  setRepository(repo: Repository): void {
    this.repository = repo;
    localStorage.setItem('repository', JSON.stringify(repo));
  }
}
