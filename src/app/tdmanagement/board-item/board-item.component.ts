import { Component, Input } from '@angular/core';
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

    constructor() {}

    substringFileName(fileName) {
		return fileName.substring(fileName.lastIndexOf("/") + 1, fileName.lastIndexOf(".java"));
	}
}