import { Component, OnInit, Input } from '@angular/core';

import { TDItem } from './../../../models/TDItem';
import { TDCodeSmellsService } from './td-code-smells.service';
import { CodeAnalysis, Clazz, Method, CodeMetrics } from './../../../models/CodeAnalysis';

@Component({
  selector: 'app-td-code-smells',
  templateUrl: './td-code-smells.component.html',
  styleUrls: ['./td-code-smells.component.css']
})
export class TDCodeSmellsComponent implements OnInit {

  codeSmellsMetrics = {
    GOD_CLASS: { ATFD: 'bg-aqua', TCC: 'bg-green', WMC: 'bg-yellow' },
    BRAIN_CLASS: { LOC: 'bg-green', TCC: 'bg-yellow', WMC: 'bg-red' },
    DATA_CLASS: { NOAM: 'bg-aqua', NOPA: 'bg-green', WMC: 'bg-yellow', WOC: 'bg-red' },
    FEATURE_ENVY: { ATFD: 'bg-aqua', FDP: 'bg-green', LAA: 'bg-yellow'},
    BRAIN_METHOD: { CYCLO: 'bg-aqua', LOC: 'bg-green', MAXNESTING: 'bg-yellow', NOAV: 'bg-red' },
    COMPLEX_METHOD: { CYCLO: 'bg-aqua' },
    LONG_METHOD: { LOC: 'bg-aqua' }
  };

  @Input() tdItem: TDItem;
  classes: Clazz[] = [];

  selectedClass: Clazz = new Clazz();
  selectedMethod: Method;

  currentBoxesColors: any;

  constructor(private service: TDCodeSmellsService) { }

  ngOnInit() {
    this.service.getCodeAnalysis(this.tdItem.commit, this.tdItem.filehash).subscribe(res => {
      this.classes = res.classes;
      this.filterCodeSmells();

      this.selectedClass = this.classes[0] || new Clazz();
      this.selectedMethod = this.selectedClass.methods ? this.selectedClass.methods[0] : null;
    });
  }

  // Keeps only classes and methods with code smells.
  filterCodeSmells() {
    for (let x = 0; x < this.classes.length; x++) {
      const clazz = this.classes[x];
      const methods = clazz.methods;

      for (let i = 0; i < methods.length; i++) {
        if (methods[i].codesmells.length === 0) {
          methods.splice(i, 1);
          i--;
        }
      }

      if (clazz.methods.length === 0 && clazz.codesmells.length === 0) {
        this.classes.splice(x, 1);
        x--;
      }
    }
  }

  updateSelectedMethod() {
    this.selectedMethod = this.selectedClass.methods[0];
  }

  getCodeMetrics(codeSmell: string, codeMetrics: CodeMetrics[]): CodeMetrics[] {
    this.currentBoxesColors = this.codeSmellsMetrics[codeSmell];

    const metricsNames: string[] = Object.keys(this.currentBoxesColors);
    const result: CodeMetrics[] = [];

    for (let metricName of metricsNames) {
      for (let codeMetric of codeMetrics) {
        if (codeMetric.name === metricName) {
          result.push(codeMetric);
          break;
        }
      }
    }

    return result;
  }

  getBrainMethodQtd(): number {
    let qtd = 0;

    this.selectedClass.methods.forEach((method) => {
      if (method.codesmells.includes('BRAIN_METHOD')) {
        qtd++;
      }
    });

    return qtd;
  }

}
