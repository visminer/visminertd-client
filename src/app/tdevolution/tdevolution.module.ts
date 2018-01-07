import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDEvolutionComponent } from './tdevolution.component';
import { TDEvolutionBoxesComponent } from './boxes/boxes.component';
import { NouisliderComponent } from 'ng2-nouislider/src/nouislider';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TDEvolutionComponent, TDEvolutionBoxesComponent, NouisliderComponent],
  exports: [TDEvolutionComponent]
})
export class TDEvolutionModule { }
