import { Component, OnInit } from '@angular/core';

import { VisminerService } from '../shared/services/visminer.service';

@Component({
  selector: 'app-tdanalyzer',
  templateUrl: './tdanalyzer.component.html',
  styleUrls: ['./tdanalyzer.component.css']
})
export class TDAnalyzerComponent implements OnInit {

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
  }

}
