import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { TDItem } from '../../shared/models/TDItem';

@Component({
    selector: 'kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
    @Input() tdItems: TDItem[];
    @Input() title: string;
    @Input() count: number;
    @Output() uploaded:EventEmitter<string> = new EventEmitter();

    constructor() {}

    boardItemEvent(event) {
        this.uploaded.emit(event);
    }
}