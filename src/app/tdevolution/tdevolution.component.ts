import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/Repository';
import { Reference } from '../shared/models/Reference';
import { VisminerService } from '../shared/services/visminer.service';
import { NouisliderComponent } from 'ng2-nouislider/src/nouislider';

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

  constructor(private visminerServ: VisminerService) { }

  ngOnInit() {
    this.repository = this.visminerServ.repository;
    this.references = this.visminerServ.references;
    this.loadSlider();
  }

  loadSlider() {
    var references = this.references;
    var max = references.length - 1;
    this.sliderRange = [0, max];
    this.sliderConfig = {
      behaviour: 'drag',
      connect: true,
      start: [0, max],
      keyboard: true,
      step: 1,
      range: {
        min: 0,
        max: max
      },
      pips: {
        mode: 'steps',
        density: 0,
        format: {
          to: function(value){
          return references[value].name;
          }
        }
      }
    };
  }

}
