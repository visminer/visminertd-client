import { Component, OnInit, Input } from '@angular/core';

import { TDItem } from './../../../models/TDItem';
import { FindBugs, Bug } from './../../../models/FindBugs';
import { TDFindbugsService } from './td-findbugs.service';

@Component({
  selector: 'app-td-findbugs',
  templateUrl: './td-findbugs.component.html',
  styleUrls: ['./td-findbugs.component.css']
})
export class TDFindbugsComponent implements OnInit {

  @Input() tdItem: TDItem;
  bugs: Bug[] = [];

  constructor(private service: TDFindbugsService) { }

  ngOnInit() {
    this.service.getBugs(this.tdItem.commit, this.tdItem.filehash).subscribe(res => {
      this.bugs = res.bugs;
    });
  }

}
