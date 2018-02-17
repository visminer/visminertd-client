import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TDAnalyzerComponent } from './tdanalyzer/tdanalyzer.component';
import { TDEvolutionComponent } from './tdevolution/tdevolution.component';
import { TDManagementComponent } from './tdmanagement/tdmanagement.component';

const routes: Routes = [
  { path: '', component: TDEvolutionComponent },
  { path: 'tdanalyzer', component: TDAnalyzerComponent },
  { path: 'tdevolution', component: TDEvolutionComponent },  
  { path: 'tdmanagement', component: TDManagementComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
