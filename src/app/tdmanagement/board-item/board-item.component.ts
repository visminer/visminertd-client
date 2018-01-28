import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { denodeify } from 'q';

import { TDManagementService } from '../tdmanagement.service';
import { TDManagementComponent } from '../tdmanagement.component';
import { TDModalComponent } from '../../shared/components/td-modal/td-modal.component';
import { TDItem } from '../../shared/models/TDItem';

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

    itemDetailsModal: BsModalRef;

    constructor(private tdManagementServ: TDManagementService, private modalService: BsModalService) {}

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
    
    substringDebt(debtName) {
        return debtName.substring(0, debtName.lastIndexOf("_")).toLowerCase();
    }

    showDetails(file: TDItem) {
        this.itemDetailsModal = this.modalService.show(TDModalComponent);
        this.itemDetailsModal.content.tdItem = file;
        this.itemDetailsModal.content.commit = file.commit;
    }
}