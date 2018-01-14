import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TDAnalyzerComponent } from './tdanalyzer.component';
import { TDAnalyzerService } from './tdanalyzer.service';
import { TDItemDetailsComponent } from './td-item-details/td-item-details.component';
import { TDFormComponent } from './td-item-details/td-form/td-form.component';
import { TDCodeSmellsComponent } from './td-item-details/td-code-smells/td-code-smells.component';
import { TDFormService } from './td-item-details/td-form/td-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TDAnalyzerComponent,
    TDItemDetailsComponent,
    TDFormComponent,
    TDCodeSmellsComponent
  ],
  providers: [
    TDAnalyzerService,
    TDFormService
  ],
  exports: [TDAnalyzerComponent],
  entryComponents: [TDItemDetailsComponent]
})
export class TDAnalyzerModule { }
