import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TDModalComponent } from './../shared/components/td-modal/td-modal.component';
import { VisminerService } from '../shared/services/visminer.service';
import { TDAnalyzerService } from './tdanalyzer.service';
import { Reference } from './../shared/models/Reference';
import { Repository } from './../shared/models/Repository';
import { TDItem, TDItemDebt } from './../shared/models/TDItem';

@Component({
  selector: 'app-tdanalyzer',
  templateUrl: './tdanalyzer.component.html',
  styleUrls: ['./tdanalyzer.component.css']
})
export class TDAnalyzerComponent implements OnInit {

  itemDetailsModal: BsModalRef;
  filter: any;

  references: Reference[];
  repository: Repository;
  selectedReference: Reference = null;

  files$: Observable<TDItem[]>;

  constructor(private tdanalyzerServ: TDAnalyzerService, private visminerServ: VisminerService,
  private modalService: BsModalService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
  }

  showDetails(file: TDItem) {
    this.itemDetailsModal = this.modalService.show(TDModalComponent);
    this.itemDetailsModal.content.tdItem = file;
    this.itemDetailsModal.content.commit = this.selectedReference.commits[0];
  }

  updateTDItems(filter?: any): void {
    this.filter = filter;

    if (this.selectedReference) {
      this.files$ = this.tdanalyzerServ.getTDItems(this.selectedReference.commits[0], filter);
    } else {
      alert('You need to select one reference on the menu.');
    }
  }

  confirmAllDebtsByReference(filter?: any): void {
    if (!this.selectedReference) {
      alert('You need to select one reference on the menu.');
      return;
    }

    if (confirm('Are you sure?')) {
      this.tdanalyzerServ.confirmAllDebt(this.selectedReference.commits[0], filter).subscribe(r => console.log(r));
    }
  }

  confirmDebt(file: TDItem, debt: TDItemDebt): void {
    this.tdanalyzerServ.confirmDebt(file._id, debt.name).subscribe(r => console.log(r));
  }

  removeDebt(file: TDItem, debt: TDItemDebt): void {
    this.tdanalyzerServ.removeDebt(file._id, debt.name).subscribe(r => console.log(r));
  }

}
