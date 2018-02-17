import { Component, OnInit } from '@angular/core';

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

  repositories: Repository[];
  references: Reference[];

  refs: Reference[] = [];

  constructor(private sidebarServ: SidebarService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.sidebarServ.getRepositories().subscribe(result => this.repositories = result);
    let selectedRepository: Repository = JSON.parse(localStorage.getItem('repository'));
    if (selectedRepository) {
      this.sidebarServ.getReferences(selectedRepository._id).subscribe(result => this.references = result);
    }
  }

  setRepository(repository: Repository): void {
    this.visminerServ.setRepository(repository);
    this.sidebarServ.getReferences(repository._id).subscribe(result => this.references = result);
  }

  addReference(reference: Reference): void {
    this.visminerServ.addReference(reference);
  }

  isChecked(reference: Reference): boolean {
    for (let i = 0; i < this.visminerServ.references.length; i++) {
      if (reference._id == this.visminerServ.references[i]._id) {
        return true;
      }
    }
    return false;
  }

}
