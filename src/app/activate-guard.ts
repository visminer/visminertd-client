import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export default class ActivateGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    let repository = JSON.parse(localStorage.getItem('repository'));
    let references = JSON.parse(localStorage.getItem('references'));
    if (repository && references.length) {
        return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}