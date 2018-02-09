import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../shared/pipes/pipes.module';
import { TDAnalyzerComponent } from './tdanalyzer.component';
import { TDAnalyzerService } from './tdanalyzer.service';
import { AlertModule } from '../shared/components/alert/alert.module';
import { TdModalModule } from '../shared/components/td-modal/td-modal.module';
import { TDFilterModule } from './../shared/components/td-filter/td-filter.module';

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    TdModalModule,
    PipesModule,
    TDFilterModule
  ],
  declarations: [
    TDAnalyzerComponent
  ],
  providers: [
    TDAnalyzerService,
  ],
  exports: [TDAnalyzerComponent],
})
export class TDAnalyzerModule { }
