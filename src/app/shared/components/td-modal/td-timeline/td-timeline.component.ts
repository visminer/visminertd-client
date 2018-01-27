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
  tdHistory$: Observable<TDItem[]>;

  constructor(private timelineServ: TDTimelineService, public visminerServ: VisminerService) { }

  ngOnInit() {
    this.tdHistory$ = this.timelineServ.getFileDebtHistory(this.tdItem);
  }

}
