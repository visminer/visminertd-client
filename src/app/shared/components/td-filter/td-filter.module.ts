import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { TDFilterComponent } from './td-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMultiSelectModule
  ],
  declarations: [TDFilterComponent],
  exports: [TDFilterComponent]
})
export class TDFilterModule { }
