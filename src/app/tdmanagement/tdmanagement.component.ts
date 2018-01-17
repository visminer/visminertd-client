import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';

import { VisminerService } from '../shared/services/visminer.service';
import { TDManagementService } from './tdmanagement.service';
import { TDReport } from '../shared/models/TDReport';
import { TDItem } from '../shared/models/TDItem';
import { debounce } from 'rxjs/operators/debounce';

@Component({
  selector: 'app-tdmanagement',
  templateUrl: './tdmanagement.component.html',
  styleUrls: ['./tdmanagement.component.css']
})
export class TDManagementComponent implements OnInit {

  repository: Repository; 
  references: Reference[]; 
  tdReport: TDReport;
  todo: {
    code: TDItem[],
    design: TDItem[],
  };
  doing: {
    code: TDItem[],
    design: TDItem[],
  };
  done: {
    code: TDItem[],
    design: TDItem[],
  };

  constructor(private tdManagementServ: TDManagementService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.initializeArrays();
    // TODO: Give the option to choose which ref to analyze
    if (this.repository) {
      this.tdManagementServ.getTDReportByRepoAndRef(this.repository._id, 'master').subscribe(
        data => {
          this.tdReport = data[0];
          this.loadKanbanItems();
        }
      );
    }  
  }

  initializeArrays() {
    this.todo = {
      code: [],
      design: [],
    };
    this.doing = {
      code: [],
      design: [],
    };
    this.done = {
      code: [],
      design: [],
    };
    
  }

  loadKanbanItems() {
    this.tdReport.technicaldebt.forEach( tdItem => {
      tdItem.debts.forEach( debtObj => {
        if (debtObj.value == 1 && debtObj.name === "CODE_DEBT") {
          this.todo.code.push(tdItem);
        } else if (debtObj.value == 1 && debtObj.name === "DESIGN_DEBT") {
          this.todo.design.push(tdItem);          
        } else if (debtObj.value == 2 && debtObj.name === "CODE_DEBT") {
          this.doing.code.push(tdItem);
        } else if (debtObj.value == 2 && debtObj.name === "DESIGN_DEBT") {
          this.doing.design.push(tdItem);          
        } else if (debtObj.value == 3 && debtObj.name === "CODE_DEBT") {
          this.done.code.push(tdItem);
        } else if (debtObj.value == 3 && debtObj.name === "DESIGN_DEBT") {
          this.done.design.push(tdItem);          
        } 
      });      
    });
  }
}