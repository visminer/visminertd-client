import { Component, OnInit, Input } from '@angular/core';

import { TDMetricsGraphService } from './td-metrics-graph.service';
import { TDItem } from './../../../shared/models/TDItem';
import { CodeAnalysis } from '../../../shared/models/CodeAnalysis';

@Component({
  selector: 'app-td-metrics-graph',
  templateUrl: './td-metrics-graph.component.html',
  styleUrls: ['./td-metrics-graph.component.css']
})
export class TDMetricsGraphComponent implements OnInit {

  @Input() tdItem: TDItem;

  analysisHistory: CodeAnalysis[] = [];
  chart: any;

  clazz: string;
  metric: string;
  versions: string[];

  allClasses: Set<string>;
  allMetrics: string[] = [];

  constructor(private metricsGraphServ: TDMetricsGraphService) { }

  ngOnInit() {
    this.metricsGraphServ.getAnalysisHistory(this.tdItem).subscribe(analysisHistory => {
      this.analysisHistory = analysisHistory;
      this.allClasses = new Set<string>();

      this.analysisHistory.forEach(analysis => {
        analysis.classes.forEach(clazz => {
          this.allClasses.add(clazz.name);
        });
      });

      if (analysisHistory.length > 0) {
        this.clazz = this.allClasses.values().next().value;
        this.allMetrics = analysisHistory[0].classes[0].metrics.map(elem => elem.name);
        this.metric = this.allMetrics[0];
      }
    });
  }

  updateChart() {
    console.log(this.clazz);
    console.log(this.metric);
  }

}
