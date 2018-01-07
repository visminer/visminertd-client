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
  selectedReference: Reference;
  files$: Observable<TDItem[]>;

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
  }

  updateViewByReference(): void { }

  confirmAllDebtsByReference(): void { }

  showTypeSmellsDetails(file: TDItem): void { }

  confirmDebt(file: TDItem, debt: TDItemDebt): void { }

  removeDebt(file: TDItem, debt: TDItemDebt): void { }

}
