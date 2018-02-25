import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { TDTimelineService } from './td-timeline.service';
import { VisminerService } from './../../../services/visminer.service';
import { TDItem } from './../../../models/TDItem';

@Component({
  selector: 'app-td-timeline',
  templateUrl: './td-timeline.component.html',
  styleUrls: ['./td-timeline.component.css']
})
export class TDTimelineComponent implements OnInit {

  @Input() tdItem: TDItem;
  tdHistory: TDItem[];
  tdSymbols = {};

  constructor(private timelineServ: TDTimelineService, public visminerServ: VisminerService) { }

  ngOnInit() {
    this.timelineServ.getFileDebtHistory(this.tdItem).subscribe(
      res => {
        this.tdHistory = res;
        
        let prevSum = 0;
        for (let item of res.slice().reverse()) {
          let sum = item.indicators.reduce((a, b) => a + b.occurrences, 0);
          console.log(sum);
          if (sum > prevSum) {
            this.tdSymbols[item._id] = 'red';
          } else if (sum < prevSum) {
            this.tdSymbols[item._id] = 'green';
          } else {
            this.tdSymbols[item._id] = 'gray';
          }
          prevSum = sum;
        }
      }
    );
  }

}
