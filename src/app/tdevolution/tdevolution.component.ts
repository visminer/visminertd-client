import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/Repository';
import { VisminerService } from '../shared/services/visminer.service';

@Component({
  selector: 'app-tdevolution',
  templateUrl: './tdevolution.component.html',
  styleUrls: ['./tdevolution.component.css']
})
export class TDEvolutionComponent implements OnInit {

  repository: Repository;

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
  }

}
