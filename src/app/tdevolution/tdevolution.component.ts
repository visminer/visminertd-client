import { Component, OnInit } from '@angular/core';

import { VisminerService } from '../shared/services/visminer.service';

@Component({
  selector: 'app-tdevolution',
  templateUrl: './tdevolution.component.html',
  styleUrls: ['./tdevolution.component.css']
})
export class TDEvolutionComponent implements OnInit {

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
  }

}
