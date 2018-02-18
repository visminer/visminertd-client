import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDManagementComponent } from './tdmanagement.component';
import { TDManagementService } from './tdmanagement.service';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
  ],
  declarations: [
    TDManagementComponent, KanbanBoardComponent, BoardItemComponent,
  ],
  providers: [
    TDManagementService,
  ],
  exports: [TDManagementComponent],
})
export class TDManagementModule { }
