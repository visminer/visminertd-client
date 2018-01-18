import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SortablejsModule } from 'angular-sortablejs';

import { VisminerService } from './shared/services/visminer.service';
import { SidebarService } from './shared/components/sidebar/sidebar.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TDAnalyzerModule } from './tdanalyzer/tdanalyzer.module';
import { TDEvolutionModule } from './tdevolution/tdevolution.module';
import { TDManagementModule } from './tdmanagement/tdmanagement.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from './shared/components/alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    SortablejsModule.forRoot({ animation: 200 }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    TDAnalyzerModule,
    TDEvolutionModule,
    TDManagementModule,
    AlertModule,
  ],
  providers: [
    VisminerService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
