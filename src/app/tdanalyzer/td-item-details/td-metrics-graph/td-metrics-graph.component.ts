import { Component, OnInit, Input } from '@angular/core';

import { TDMetricsGraphService } from './td-metrics-graph.service';
import { TDItem } from './../../../shared/models/TDItem';
import { CodeAnalysis } from '../../../shared/models/CodeAnalysis';
import { version } from 'moment';

@Component({
  selector: 'app-td-metrics-graph',
  templateUrl: './td-metrics-graph.component.html',
  styleUrls: ['./td-metrics-graph.component.css']
})
export class TDMetricsGraphComponent implements OnInit {

  @Input() tdItem: TDItem;
  analysisHistory: CodeAnalysis[] = [];

  chart: any;
  versions: string[];
  metricValues: number[];

  clazz: string;
  metric: string;

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

      this.updateChart();
    });
  }

  updateChart() {
    this.versions = [];
    this.metricValues = [];

    this.analysisHistory.forEach(analysis => {
      for (let i = 0; i < analysis.classes.length; i++) {
        const tmpCls = analysis.classes[i];
        if (tmpCls.name === this.clazz) {
          this.versions.push(analysis.reference);
          for (let y = 0; y < tmpCls.metrics.length; y++) {
            if (tmpCls.metrics[i].name === this.metric) {
              this.metricValues.push(tmpCls.metrics[i].value);
              break;
            }
          }
          break;
        }
      }
    });

    this.drawChart();
    console.log(this.versions);
    console.log(this.metricValues);
  }

  private drawChart() {
    this.chart = {
      title: {
        text: 'Metrics Evolution'
      },
      subtitle: {
        text: this.metric
      },
      xAxis: {
        title: {
          text: 'Versions'
        },
        categories: this.versions
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Metrics Values'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold'
          }
        }
      },
      credits: {
        enabled: false
      },
      options: {
        chart: {
          type: 'line',
          zoomType: 'x'
        }
      },
      series: {
        type: 'line',
        data: this.metricValues
      }
    };
  }

}