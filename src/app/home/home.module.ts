import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MinerModalModule } from '../shared/components/header/miner-modal/miner-modal.module';

@NgModule({
  imports: [
    CommonModule,
    MinerModalModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
