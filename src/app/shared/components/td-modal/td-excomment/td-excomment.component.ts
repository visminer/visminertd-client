import { Component, OnInit, Input } from '@angular/core';

import { TDExcommentService } from './td-excomment.service';
import { TDItem } from './../../../models/TDItem';
import { ExComment, Comment } from '../../../models/ExComment';

@Component({
  selector: 'app-td-excomment',
  templateUrl: './td-excomment.component.html',
  styleUrls: ['./td-excomment.component.css']
})
export class TDExcommentComponent implements OnInit {

  @Input() tdItem: TDItem;
  comments: Comment[] = [];
  page = 1;

  constructor(private service: TDExcommentService) { }

  ngOnInit() {
    this.service.getComments(this.tdItem.commit, this.tdItem.filehash).subscribe(res => {
      this.comments = res ? res.comments : [];
    });
  }

}
