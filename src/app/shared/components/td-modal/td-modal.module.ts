import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { PipesModule } from './../../pipes/pipes.module';
import { TDTimelineComponent } from './td-timeline/td-timeline.component';
import { TDFormComponent } from './td-form/td-form.component';
import { TDMetricsGraphComponent } from './td-metrics-graph/td-metrics-graph.component';
import { TDModalComponent } from './td-modal.component';
import { TDFormService } from './td-form/td-form.service';
import { TDMetricsGraphService } from './td-metrics-graph/td-metrics-graph.service';
import { TDTimelineService } from './td-timeline/td-timeline.service';
import { TDCodeSmellsComponent } from './td-code-smells/td-code-smells.component';
import { TDCodeSmellsService } from './td-code-smells/td-code-smells.service';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ChartModule
  ],
  declarations: [
    TDFormComponent,
    TDMetricsGraphComponent,
    TDTimelineComponent,
    TDModalComponent,
    TDCodeSmellsComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    TDFormService,
    TDMetricsGraphService,
    TDTimelineService,
    TDCodeSmellsService
  ],
  exports: [
    TDModalComponent
  ],
  entryComponents: [TDModalComponent]
})
export class TdModalModule { }