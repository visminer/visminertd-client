import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-miner-modal',
  templateUrl: './miner-modal.component.html',
  styleUrls: ['./miner-modal.component.css']
})
export class MinerModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}
}
