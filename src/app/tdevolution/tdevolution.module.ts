import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDEvolutionComponent } from './tdevolution.component';
import { TDEvolutionBoxesComponent } from './boxes/boxes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TDEvolutionComponent, TDEvolutionBoxesComponent],
  exports: [TDEvolutionComponent]
})
export class TDEvolutionModule { }
