import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDAnalyzerComponent } from './tdanalyzer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TDAnalyzerComponent],
  exports: [TDAnalyzerComponent]
})
export class TDAnalyzerModule { }
