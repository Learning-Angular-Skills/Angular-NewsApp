import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/root/app.component';
import { TopheadingComponent } from '../component/topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { TechnewsComponent } from '../component/technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
