import { Component, OnInit, Input } from '@angular/core';

import { TDItem } from '../../../models/TDItem';
import { CheckStyle, StyleProblem } from './../../../models/CheckStyle';
import { TDCheckstyleService } from './td-checkstyle.service';

@Component({
  selector: 'app-td-checkstyle',
  templateUrl: './td-checkstyle.component.html',
  styleUrls: ['./td-checkstyle.component.css']
})
export class TDCheckstyleComponent implements OnInit {

  @Input() tdItem: TDItem;
  styleProblems: StyleProblem[] = [];

  constructor(private service: TDCheckstyleService) { }

  ngOnInit() {
    this.service.getStyleProblems(this.tdItem.commit, this.tdItem.filehash).subscribe(res => {
      this.styleProblems = res ? res.style_problems : [];
    });
  }

}
