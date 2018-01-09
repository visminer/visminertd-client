import { TDAnalyzerService } from './tdanalyzer.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { VisminerService } from '../shared/services/visminer.service';
import { Reference } from './../shared/models/Reference';
import { Repository } from './../shared/models/Repository';
import { TDItem, TDItemDebt } from './../shared/models/TDItem';

@Component({
  selector: 'app-tdanalyzer',
  templateUrl: './tdanalyzer.component.html',
  styleUrls: ['./tdanalyzer.component.css']
})
export class TDAnalyzerComponent implements OnInit {

  references: Reference[];
  repository: Repository;
  selectedReference: Reference = null;
  files$: Observable<TDItem[]>;

  constructor(private tdanalyzerServ: TDAnalyzerService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
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
