import { Component, Input }  from '@angular/core';

@Component({
    selector: 'kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
    @Input() tdItems: any;
    @Input() title: string;

    constructor() {}
}