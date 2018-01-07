import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDEvolutionComponent } from './tdevolution.component';
import { TDEvolutionBoxesComponent } from './boxes/boxes.component';
import { NouisliderComponent } from 'ng2-nouislider/src/nouislider';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [TDEvolutionComponent, TDEvolutionBoxesComponent, NouisliderComponent],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  exports: [TDEvolutionComponent]
})
export class TDEvolutionModule { }
