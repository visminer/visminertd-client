import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDManagementComponent } from './tdmanagement.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TDManagementComponent,
  ],
  providers: [
  ],
  exports: [TDManagementComponent],
})
export class TDManagementModule { }
