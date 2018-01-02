import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuLeftSideComponent } from './shared/components/menu-left-side/menu-left-side.component';
import { RepositoryService } from './shared/services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuLeftSideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
