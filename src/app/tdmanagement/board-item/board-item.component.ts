import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TDItem } from '../../shared/models/TDItem';
import { TDManagementService } from '../tdmanagement.service';
import { TDManagementComponent } from '../tdmanagement.component';
import { denodeify } from 'q';

@Component({
    selector: 'board-item',
    templateUrl: './board-item.component.html',
    styleUrls: ['./board-item.component.css']
})

export class BoardItemComponent {
    @Input() tdItem: TDItem;
    @Input() debtName: string;
    @Input() boardName: string;
    @Output() uploaded:EventEmitter<any> = new EventEmitter();

    constructor(private tdManagementServ: TDManagementService) {}

    payDebt(tdItem, debtName) {
        this.tdManagementServ.payDebt(tdItem._id, debtName, 2).subscribe(r => console.log(r));
        let event = {
            tdItem: tdItem,
            debtName: debtName,
            action: 'pay',
        }
        this.uploaded.emit(event);
    }

    paidDebt(tdItem, debtName) {
        this.tdManagementServ.paidDebt(tdItem._id, debtName, 3).subscribe(r => console.log(r));
        let event = {
            tdItem: tdItem,
            debtName: debtName,
            action: 'paid',
        }
        this.uploaded.emit(event);
    }

    substringFileName(fileName) {
		return fileName.substring(fileName.lastIndexOf("/") + 1, fileName.lastIndexOf(".java"));
	}
}