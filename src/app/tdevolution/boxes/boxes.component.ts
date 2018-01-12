import { Component, Input } from '@angular/core';
import { Reference } from '../../shared/models/Reference';

@Component({
  selector: 'tdevolution-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class TDEvolutionBoxesComponent {
  @Input() sliderRange: number[];
  @Input() references: Reference[];

  constructor() { }
}