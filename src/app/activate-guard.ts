import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { VisminerService } from './shared/services/visminer.service';

@Injectable()
export default class ActivateGuard implements CanActivate {

  constructor(private router: Router, private visminerServ: VisminerService) { }

  canActivate() {
    let repository = this.visminerServ.repository;
    let references = this.visminerServ.references;
    
    if (repository && references.length) {
        return true;
    }

    alert("Select a repository and a version in the sidebar.")
    this.router.navigate(['/']);
    return false;
  }
}