import { Component, OnInit, IterableDiffers, DoCheck, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';
import { TDReport } from '../shared/models/TDReport';
import { TDItem } from '../shared/models/TDItem';
import { FilesReport } from '../shared/models/CodeAnalysisReport';
import { VisminerService } from '../shared/services/visminer.service';
import { TDEvolutionService } from './tdevolution.service';

import { NouisliderComponent } from 'ng2-nouislider/src/ng2-nouislider';
import { ChartComponent } from 'angular2-highcharts';

@Component({
  selector: 'app-tdevolution',
  templateUrl: './tdevolution.component.html',
  styleUrls: ['./tdevolution.component.css']
})
export class TDEvolutionComponent implements OnInit {
  repository: Repository; 
  @Input() references: Reference[]; 
  referenceNames: string[];
  differ: any;

  sliderRange: number[];  
  sliderConfig: any;
  chartConfig: Object;
  tdReport: TDReport[];
  filesReport: FilesReport[];

  tdBoxes: {
    classesTotal: number[],
    indicatorsTotal: number[],
    debtsTotal: number[],
  }

  constructor(private tdEvolutionServ: TDEvolutionService, private visminerServ: VisminerService, differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.sliderRange = [0, this.references.length - 1];   
    this.tdBoxes = {
      classesTotal: [],
      indicatorsTotal: [],
      debtsTotal: [],
    }
    this.loadSlider();
    
    const commits = this.references.map(elem => elem.commits[0]).join();
    if (this.repository) {
      this.tdEvolutionServ.getTDReport(this.repository._id, commits).subscribe(
        data => {
          this.tdReport = data;
          this.loadChart();    
        }
      );
      this.tdEvolutionServ.countFilesByReference(this.repository._id, commits).subscribe(
        data => {
          this.filesReport = data;
          this.setFilesTotalByReference();
        }  
      );
    }  
  }

  ngDoCheck() {
    let change = this.differ.diff(this.references);
    if (change) {
      if (this.sliderRange[1] > this.references.length - 1)
        this.sliderRange[1] = this.references.length - 1;
      this.loadChart();
    }
  }  

  loadSlider() {
    var self = this;
    self.sliderConfig = {
      start: [0, self.references.length - 1],
      pips: {
        mode: 'steps',
        format: {
          to: function(value){ return self.references[value].name; }
        }
      }
    };
  }

  onChangeSlider(values) {
    this.sliderRange = [values[0], values[1]];
    this.loadChart();
    this.setFilesTotalByReference();
  }

 loadChart() {
  let seriesArray = this.loadSeries();
  this.chartConfig = {
    title : { text : 'Technical Debt X Versions' },
    xAxis: { categories: this.referenceNames },
    yAxis: {
      min: 0,
      allowDecimals: false,
      title: { text: 'Total of files having Technical Debt' },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: 'gray'
        }
      }
    },  
    chart: {
      type: 'column',
      width: 1100, // TODO: Make it 100% of parent div instead of setting statically
      height: 800
    },
    legend: {
      align: 'center',
      verticalAlign: 'top',
      y: 20,
      floating: true,
      backgroundColor: 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: 'white',
          style: {
            textShadow: '0 0 3px black, 0 0 3px black'
          }
        }
      }
    },
    series: seriesArray
    };
  }

  loadSeries() {
    this.referenceNames = [];
    this.tdBoxes.debtsTotal = [];
    this.tdBoxes.indicatorsTotal = [];
    let chartCodeDebtSeries = [];
    let chartDesignDebtSeries = [];
    let chartDefectDebtSeries = [];
    let chartTestDebtSeries = [];
    let chartRequirementDebtSeries = [];
    let chartUnknownDebtSeries = [];
    let chartArchitectureDebtSeries = [];
    let chartBuildDebtSeries = [];
    let chartDocumentationDebtSeries = [];
    let chartPeopleDebtSeries = [];
    let seriesArray = [];

    for (let i = this.sliderRange[0]; i < this.sliderRange[1] + 1; i++) {
      this.referenceNames.push(this.references[i].name);
      let report: TDReport = this.getReport(this.references[i].name);

      if (report) {
        let tdItens: TDItem[]  = report.technicaldebt;
        chartCodeDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "CODE_DEBT"));
        chartDesignDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "DESIGN_DEBT"));
        chartDefectDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "DEFECT_DEBT"));
        chartTestDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "TEST_DEBT"));
        chartRequirementDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "REQUIREMENT_DEBT"));
        chartUnknownDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "UNKNOWN_DEBT"));
        chartArchitectureDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "ARCHITECTURE_DEBT"));
        chartBuildDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "BUILD_DEBT"));
        chartDocumentationDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "DOCUMENTATION_DEBT"));
        chartPeopleDebtSeries.push(this.getTotalOfDebtsByType(tdItens, "PEOPLE_DEBT"));
        
        this.tdBoxes.indicatorsTotal.push(this.getTotalOfIndicators(tdItens));
      }  
    }
    
    this.referenceNames.forEach((ref, index) => {
      let total = chartCodeDebtSeries[index] + chartDesignDebtSeries[index] + chartDefectDebtSeries[index] +
      chartTestDebtSeries[index] + chartRequirementDebtSeries[index] + chartUnknownDebtSeries[index] + chartArchitectureDebtSeries[index] +
      chartBuildDebtSeries[index] + chartDocumentationDebtSeries[index] + chartPeopleDebtSeries[index];
      if (total) this.tdBoxes.debtsTotal.push(total);
      else this.tdBoxes.debtsTotal.push(0);
    });
    seriesArray.push({ color: '#dd3939', name: 'Defect Debt', data: chartDefectDebtSeries });
    seriesArray.push({ color: '#f39c12', name: 'Test Debt', data: chartTestDebtSeries });
    seriesArray.push({ color: '#8a6d3b', name: 'Requirement Debt', data: chartRequirementDebtSeries });
    seriesArray.push({ color: '#1B93A7', name: 'Code Debt', data: chartCodeDebtSeries });
    seriesArray.push({ color: '#91A28B', name: 'Design Debt', data: chartDesignDebtSeries });
    seriesArray.push({ color: '#008d4c', name: 'Unknown Debt', data: chartUnknownDebtSeries });
    seriesArray.push({ color: '#58f3fc', name: 'Architecture Debt', data: chartArchitectureDebtSeries });
    seriesArray.push({ color: '#001F3F', name: 'Build Debt', data: chartBuildDebtSeries });
    seriesArray.push({ color: '#605ca8', name: 'Documentation Debt', data: chartDocumentationDebtSeries });
    seriesArray.push({ color: '#adfc58', name: 'People Debt', data: chartPeopleDebtSeries });

    return seriesArray;
  }

getReport(referenceName: string) {
    for (let index in this.tdReport) {
      if (this.tdReport[index].reference.toLowerCase().includes(referenceName.toLowerCase())) return this.tdReport[index]
    }

    return null;
  }

  // TODO: remove the 0 from condition
  getTotalOfDebtsByType(tdItens, debtName) {
    let total = 0;
		for (let i = 0; i < tdItens.length; i++) {
      let debts = tdItens[i].debts;
			for (let index in debts) {
				let debtObject = debts[index];
				if (debtObject.name == debtName && (debtObject.value > -1 && debtObject.value < 3)) {
					total++;
					break;
				}
			}
		}
		return total;
  }

  getTotalOfIndicators(tdItens: TDItem[]) {
    let total = 0;
    tdItens.forEach(tdItem => {
      total += tdItem.indicators.length;
    });

    return total;
  }

  setFilesTotalByReference() {
    this.tdBoxes.classesTotal = [];
    for (let pos of this.sliderRange) {
      let referenceName = this.references[pos].name.toLowerCase();
      this.filesReport.forEach((fileReport) => {
        // _id is actually the reference name
        if (fileReport._id.toLowerCase().endsWith(referenceName)) {
          this.tdBoxes.classesTotal.push(fileReport.totalFiles);
        }
      });
    }
  }

}
