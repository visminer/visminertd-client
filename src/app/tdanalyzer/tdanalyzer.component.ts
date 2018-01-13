import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { VisminerService } from '../shared/services/visminer.service';
import { TDAnalyzerService } from './tdanalyzer.service';
import { TDItemDetailsComponent } from './td-item-details/td-item-details.component';
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
    this.itemDetailsModal = this.modalService.show(TDItemDetailsComponent);
    this.itemDetailsModal.content.tdItem = file;
    this.itemDetailsModal.content.commit = this.selectedReference.commits[0];
  }

  updateViewByReference(): void {
    if (!this.selectedReference) {
      alert('You need to select one reference on the menu.');
      return;
    }
    this.files$ = this.tdanalyzerServ.getTDItems(this.selectedReference.commits[0]);
  }

  confirmAllDebtsByReference(): void {
    if (!this.selectedReference) {
      alert('You need to select one reference on the menu.');
      return;
    }
    this.tdanalyzerServ.confirmAllDebt(this.selectedReference.commits[0]).subscribe(r => console.log(r));
  }

  showTypeSmellsDetails(file: TDItem): void {
    console.log(file);
  }

  confirmDebt(file: TDItem, debt: TDItemDebt): void {
    this.tdanalyzerServ.confirmDebt(file._id, debt.name).subscribe(r => console.log(r));
  }

  removeDebt(file: TDItem, debt: TDItemDebt): void {
    this.tdanalyzerServ.removeDebt(file._id, debt.name).subscribe(r => console.log(r));
  }

  subStrFilename(fileName: string): string {
    return fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.java'));
  }

}
