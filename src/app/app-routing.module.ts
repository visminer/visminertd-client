import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TDAnalyzerComponent } from './tdanalyzer/tdanalyzer.component';
import { TDEvolutionComponent } from './tdevolution/tdevolution.component';
import { TDManagementComponent } from './tdmanagement/tdmanagement.component';
import ActivateGuard from './activate-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tdanalyzer', component: TDAnalyzerComponent, canActivate: [ActivateGuard] },
  { path: 'tdevolution', component: TDEvolutionComponent, canActivate: [ActivateGuard] },
  { path: 'tdmanagement', component: TDManagementComponent, canActivate: [ActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ActivateGuard,
  ],
})
export class AppRoutingModule { }
