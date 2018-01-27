import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TDItem } from './../../models/TDItem';

@Component({
  selector: 'app-td-modal',
  templateUrl: './td-modal.component.html',
  styleUrls: ['./td-modal.component.css']
})
export class TDModalComponent implements OnInit {

  tdItem = new TDItem();
  commit: string;
  tabView = 'td_form';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}

  updateView(view: string): void {
    this.tabView = view;
  }

}
