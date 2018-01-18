import { Component, Input, Output, EventEmitter }  from '@angular/core';

@Component({
    selector: 'kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
    @Input() tdItems: any;
    @Input() title: string;
    @Output() uploaded:EventEmitter<string> = new EventEmitter();

    constructor() {}

    boardItemEvent(event) {
        this.uploaded.emit(event);
    }
}