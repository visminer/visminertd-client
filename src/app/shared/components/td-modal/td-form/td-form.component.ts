import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';

import { TDFormService } from './td-form.service';
import { TDItem } from './../../../models/TDItem';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TDFormComponent implements OnInit {

  @Input() tdItem: TDItem;

  constructor(private formServ: TDFormService) { }

  ngOnInit() { }

  onSubmit() {
    this.formServ.updateTDItem(this.tdItem).subscribe(r => {
      if (r.success) {
        alert('Item updated.');
      } else {
        alert('An error occurred.');
      }
    });
  }

}
