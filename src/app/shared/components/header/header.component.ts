import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { MinerModalComponent } from './miner-modal/miner-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  minerModal: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  showMinerModal() {
    this.minerModal = this.modalService.show(MinerModalComponent);
  }

}
