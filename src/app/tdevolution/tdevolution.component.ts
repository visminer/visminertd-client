import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';
import { TDReport } from '../shared/models/TDReport';
import { VisminerService } from '../shared/services/visminer.service';
import { TDEvolutionService } from './tdevolution.service';

import { NouisliderComponent } from 'ng2-nouislider/src/nouislider';
import { ChartComponent } from 'angular2-highcharts';
import { TDItem } from '../shared/models/TDItem';

@Component({
  selector: 'app-tdevolution',
  templateUrl: './tdevolution.component.html',
  styleUrls: ['./tdevolution.component.css']
})
export class TDEvolutionComponent implements OnInit {
  repository: Repository; 
  references: Reference[]; 
  referenceNames: string[];

  sliderRange: number[];  
  sliderConfig: any;
  chartConfig: Object;
  tdReport: TDReport[];

  constructor(private tdEvolutionServ: TDEvolutionService, private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.sliderRange = [0, this.references.length - 1];   
    this.loadSlider();

    if (this.repository) {
      this.tdEvolutionServ.getTDReport(this.repository._id).subscribe(
        data => {
          this.tdReport = data;
          this.loadChart();    
        }
      );
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
 }

 loadChart() {
  var seriesArray = this.loadSeries();
  this.chartConfig = {
    title : { text : 'Technical Debt X Versions' },
    xAxis: { categories: this.referenceNames },
    yAxis: {
      min: 0,
      allowDecimals: false,
      title: { text: 'Total of classes having Technical Debt' },
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
      width: 1014 // TODO: Make it 100% of parent div instead of setting statically
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
    let seriesArray = [];
    let chartCodeDebtSeries = [];
    let chartDesignDebtSeries = [];
    let chartDefectDebtSeries = [];
    let chartTestDebtSeries = [];
    let chartRequirementDebtSeries = [];
    let j = 0;

    for (let i = this.sliderRange[0]; i < this.sliderRange[1] + 1; i++) {
      this.referenceNames.push(this.references[i].name);
      let report: TDReport = this.getReport(this.references[i].name);

      let tdItens: TDItem[]  = report.technicaldebt;
      let totalCodeDebt = this.getTotalOfDebtsByType(tdItens, "CODE_DEBT");
      let totalDesignDebt = this.getTotalOfDebtsByType(tdItens, "DESIGN_DEBT");
      let totalDefectDebt = this.getTotalOfDebtsByType(tdItens, "DEFECT_DEBT");
      let totalTestDebt = this.getTotalOfDebtsByType(tdItens, "TEST_DEBT");
      let totalRequirementDebt = this.getTotalOfDebtsByType(tdItens, "REQUIREMENT_DEBT");

      chartCodeDebtSeries.push(totalCodeDebt);
      chartDesignDebtSeries.push(totalDesignDebt);
      chartDefectDebtSeries.push(totalDefectDebt);
      chartTestDebtSeries.push(totalTestDebt);
      chartRequirementDebtSeries.push(totalRequirementDebt);
    }
    
    seriesArray.push({ color: '#dd3939', name: 'Defect Debt', data: chartDefectDebtSeries });
    seriesArray.push({ color: '#f39c12', name: 'Test Debt', data: chartTestDebtSeries });
    seriesArray.push({ color: '#8a6d3b', name: 'Requirement Debt', data: chartRequirementDebtSeries });
    seriesArray.push({ color: '#1B93A7', name: 'Code Debt', data: chartCodeDebtSeries });
    seriesArray.push({ color: '#91A28B', name: 'Design Debt', data: chartDesignDebtSeries });

    return seriesArray;
  }

getReport(referenceName: string) {
    for (let index in this.tdReport) {
      if (this.tdReport[index].reference === referenceName) return this.tdReport[index]
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
				if (debtObject.name == debtName && (debtObject.value == 0 || debtObject.value == 1 || debtObject.value == 2)) {
					total++;
					break;
				}
			}
		}
		return total;
  }

}
