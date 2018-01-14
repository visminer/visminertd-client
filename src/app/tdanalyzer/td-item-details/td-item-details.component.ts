import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TDItem } from './../../shared/models/TDItem';

@Component({
  selector: 'app-td-item-details',
  templateUrl: './td-item-details.component.html',
  styleUrls: ['./td-item-details.component.css']
})
export class TDItemDetailsComponent implements OnInit {

  tdItem: TDItem;
  commit: string;
  tabView = 'code_smells';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}

  updateView(view: string): void {
    this.tabView = view;
  }

}