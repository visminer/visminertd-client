import { Component, OnInit, Input } from '@angular/core';

import { TDItem } from './../../../models/TDItem';
import { TDPmdCpdService } from './td-pmd-cpd.service';
import { CPD } from '../../../models/CPD';

@Component({
  selector: 'app-td-pmd-cpd',
  templateUrl: './td-pmd-cpd.component.html',
  styleUrls: ['./td-pmd-cpd.component.css']
})
export class TDPmdCpdComponent implements OnInit {

  @Input() tdItem: TDItem;

  duplications: CPD[] = [];
  totalDuplication = 0;
  page = 1;

  constructor(private service: TDPmdCpdService) { }

  ngOnInit() {
    this.service.getDuplications(this.tdItem.commit, this.tdItem.filehash).subscribe(res => {
      this.duplications = res;
      console.log(res);

      for (let duplication of this.duplications) {
        for (let occurrence of duplication.occurrences) {
          if (occurrence.filehash === this.tdItem.filehash) {
            this.totalDuplication += occurrence.duplication_percentage;
            break;
          }
        }
      }
    });
  }

}
