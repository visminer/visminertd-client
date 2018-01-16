import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDManagementComponent } from './tdmanagement.component';
import { TDManagementService } from './tdmanagement.service';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
  ],
  declarations: [
    TDManagementComponent,
  ],
  providers: [
    TDManagementService,
  ],
  exports: [TDManagementComponent],
})
export class TDManagementModule { }
