import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';
import { VisminerService } from '../shared/services/visminer.service';
import { NouisliderComponent } from 'ng2-nouislider/src/nouislider';
import { ChartComponent } from 'angular2-highcharts';

@Component({
  selector: 'app-tdevolution',
  templateUrl: './tdevolution.component.html',
  styleUrls: ['./tdevolution.component.css']
})
export class TDEvolutionComponent implements OnInit {
  repository: Repository; 
  references: Reference[]; 
  sliderRange: number[];  
  sliderConfig: any;
  chartConfig: Object;

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.sliderRange = [0, this.references.length - 1];    
    this.loadSlider();
    this.loadChart();
  }

  //TODO: Move slide to a component
  loadSlider() {
    var self = this;
    this.sliderConfig = {
      behaviour: 'drag',
      connect: true,
      start: [0, this.references.length - 1],
      keyboard: true,
      step: 1,
      pips: {
        mode: 'steps',
        format: {
          to: function(value){
            return self.references[value].name;
          }
        }
      }
    };
  }

  onChangeSlider(values) {
    this.sliderRange = [values[0], values[1]];
 }

  //TODO: Move chart to a component
  loadChart() {
    var references = this.references;
    var seriesArray = [];
		seriesArray.push({
			color: '#dd3939',
			name: 'Defect Debt',
			data: [29.9, 71.5, 106.4, 129.2],
		});
		seriesArray.push({
			color: '#f39c12',
			name: 'Test Debt',
			data: [29.9, 71.5, 106.4, 129.2],
		});
		seriesArray.push({
			color: '#8a6d3b',
			name: 'Requirement Debt',
			data: [29.9, 71.5, 106.4, 129.2],
		});
    seriesArray.push({
      color: '#1B93A7',
      name: 'Code Debt',
      data: [29.9, 71.5, 106.4, 129.2],
    });
    seriesArray.push({
      color: '#91A28B',
      name: 'Design Debt',
      data: [29.9, 71.5, 106.4, 129.2],
    });
    this.chartConfig = {
      title : { text : 'Technical Debt X Versions' },
      xAxis: { categories: references.map(ref => ref.name) },
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

}
