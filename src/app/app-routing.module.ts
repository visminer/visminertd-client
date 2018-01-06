import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TDAnalyzerComponent } from './tdanalyzer/tdanalyzer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tdanalyzer', component: TDAnalyzerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
