import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';

import { VisminerService } from '../shared/services/visminer.service';
import { TDManagementService } from './tdmanagement.service';
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
  tdItems: TDItem[];
  todo: {
    code: TDItem[],
    design: TDItem[],
    defect: TDItem[],
    test: TDItem[],
    requirement: TDItem[],
  };
  doing: {
    code: TDItem[],
    design: TDItem[],
    defect: TDItem[],
    test: TDItem[],
    requirement: TDItem[],
  };
  done: {
    code: TDItem[],
    design: TDItem[],
    defect: TDItem[],
    test: TDItem[],
    requirement: TDItem[],
  };

  constructor(private tdManagementServ: TDManagementService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.initializeArrays();
    // TODO: Give the option to choose which ref to analyze
    if (this.repository) {
      this.tdManagementServ.getTDByRepoAndRef(this.repository._id, 'master').subscribe(
        data => {
          this.tdItems = data;
          this.loadKanbanItems();
        }
      );
    }  
  }

  initializeArrays() {
    this.todo = {
      code: [],
      design: [],
      defect: [],
      test: [],
      requirement: []
    };
    this.doing = {
      code: [],
      design: [],
      defect: [],
      test: [],
      requirement: []
    };
    this.done = {
      code: [],
      design: [],
      defect: [],
      test: [],
      requirement: []
    };
    
  }

  loadKanbanItems() {
    this.tdItems.forEach( tdItem => {
      tdItem.debts.forEach( debtObj => {
        switch (debtObj.name) {
          case "CODE_DEBT": {
            if (debtObj.value == 1)
              this.todo.code.push(tdItem);
            else if (debtObj.value == 2)
              this.doing.code.push(tdItem);
            else if (debtObj.value == 3)
              this.done.code.push(tdItem);
            break;
          }
          case "DESIGN_DEBT": {
            if (debtObj.value == 1)
              this.todo.design.push(tdItem);
            else if (debtObj.value == 2)
              this.doing.design.push(tdItem);
            else if (debtObj.value == 3)
              this.done.design.push(tdItem);
            break;
          }
          case "DEFECT_DEBT": {
            if (debtObj.value == 1)
              this.todo.defect.push(tdItem);
            else if (debtObj.value == 2)
              this.doing.defect.push(tdItem);
            else if (debtObj.value == 3)
              this.done.defect.push(tdItem);
            break;
          }
          case "TEST_DEBT": {
            if (debtObj.value == 1)
              this.todo.test.push(tdItem);
            else if (debtObj.value == 2)
              this.doing.test.push(tdItem);
            else if (debtObj.value == 3)
              this.done.test.push(tdItem);
            break;
          }
          case "REQUIREMENT_DEBT": {
            if (debtObj.value == 1)
              this.todo.requirement.push(tdItem);
            else if (debtObj.value == 2)
              this.doing.requirement.push(tdItem);
            else if (debtObj.value == 3)
              this.done.requirement.push(tdItem);
            break;
          }
        }
      });      
    });
  }

  kanbanBoardEvent(event) {
    switch (event.debtName) {
      case "CODE": {
        if (event.action === 'pay') {
          this.todo.code.splice(this.todo.code.indexOf(event.tdItem, 0), 1);
          this.doing.code.push(event.tdItem);
        } else if (event.action === 'paid') {
          this.doing.code.splice(this.doing.code.indexOf(event.tdItem, 0), 1);
          this.done.code.push(event.tdItem);
        }
        break;
      }
      case "DESIGN": {
        if (event.action === 'pay') {
          this.todo.design.splice(this.todo.design.indexOf(event.tdItem, 0), 1);
          this.doing.design.push(event.tdItem);
        } else if (event.action === 'paid') {
          this.doing.design.splice(this.doing.design.indexOf(event.tdItem, 0), 1);
          this.done.design.push(event.tdItem);
        }
        break;
      }
      case "DEFECT": {
        if (event.action === 'pay') {
          this.todo.defect.splice(this.todo.defect.indexOf(event.tdItem, 0), 1);
          this.doing.defect.push(event.tdItem);
        } else if (event.action === 'paid') {
          this.doing.defect.splice(this.doing.defect.indexOf(event.tdItem, 0), 1);
          this.done.defect.push(event.tdItem);
        }
        break;
      }
      case "TEST": {
        if (event.action === 'pay') {
          this.todo.test.splice(this.todo.test.indexOf(event.tdItem, 0), 1);
          this.doing.test.push(event.tdItem);
        } else if (event.action === 'paid') {
          this.doing.test.splice(this.doing.test.indexOf(event.tdItem, 0), 1);
          this.done.test.push(event.tdItem);
        }
        break;
      }
      case "REQUIREMENT": {
        if (event.action === 'pay') {
          this.todo.requirement.splice(this.todo.requirement.indexOf(event.tdItem, 0), 1);
          this.doing.requirement.push(event.tdItem);
        } else if (event.action === 'paid') {
          this.doing.requirement.splice(this.doing.requirement.indexOf(event.tdItem, 0), 1);
          this.done.requirement.push(event.tdItem);
        }
        break;
      }
    }
  }
}