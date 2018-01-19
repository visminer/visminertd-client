import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { TDAnalyzerComponent } from './tdanalyzer.component';
import { TDAnalyzerService } from './tdanalyzer.service';
import { TDItemDetailsComponent } from './td-item-details/td-item-details.component';
import { TDFormComponent } from './td-item-details/td-form/td-form.component';
import { TDFormService } from './td-item-details/td-form/td-form.service';
import { TDTimelineService } from './td-item-details/td-timeline/td-timeline.service';
import { TDTimelineComponent } from './td-item-details/td-timeline/td-timeline.component';
import { PipesModule } from './../shared/pipes/pipes.module';
import { TDMetricsGraphComponent } from './td-item-details/td-metrics-graph/td-metrics-graph.component';
import { TDMetricsGraphService } from './td-item-details/td-metrics-graph/td-metrics-graph.service';

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
    TDAnalyzerComponent,
    TDItemDetailsComponent,
    TDFormComponent,
    TDTimelineComponent,
    TDMetricsGraphComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    TDAnalyzerService,
    TDFormService,
    TDTimelineService,
    TDMetricsGraphService
  ],
  exports: [TDAnalyzerComponent],
  entryComponents: [TDItemDetailsComponent]
})
export class TDAnalyzerModule { }
