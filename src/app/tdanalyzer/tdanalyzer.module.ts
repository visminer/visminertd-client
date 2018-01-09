import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TDAnalyzerComponent } from './tdanalyzer.component';
import { TDAnalyzerService } from './tdanalyzer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TDAnalyzerComponent],
  providers: [TDAnalyzerService],
  exports: [TDAnalyzerComponent]
})
export class TDAnalyzerModule { }
