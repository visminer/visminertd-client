import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VisminerService } from './shared/services/visminer.service';
import { SidebarService } from './shared/components/sidebar/sidebar.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TDAnalyzerModule } from './tdanalyzer/tdanalyzer.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    TDAnalyzerModule
  ],
  providers: [
    VisminerService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
