import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { SidebarService } from './sidebar.service';
import { VisminerService } from '../../services/visminer.service';
import { Repository } from '../../models/Repository';
import { Reference } from '../../models/Reference';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  repositories$: Observable<Repository[]>;
  references$: Observable<Reference[]>;

  refs: Reference[] = [];

  constructor(private sidebarServ: SidebarService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repositories$ = this.sidebarServ.getRepositories();
  }

  setRepository(repository: Repository): void {
    this.visminerServ.repository = repository;
    this.references$ = this.sidebarServ.getReferences(repository._id);
  }

  addReference(reference: Reference): void {
    this.visminerServ.addReference(reference);
  }

}
