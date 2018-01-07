import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TDAnalyzerComponent } from './tdanalyzer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TDAnalyzerComponent],
  exports: [TDAnalyzerComponent]
})
export class TDAnalyzerModule { }
