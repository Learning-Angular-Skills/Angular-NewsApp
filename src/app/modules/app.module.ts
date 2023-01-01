import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/root/app.component';
import { TopheadingComponent } from '../component/topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { TechnewsComponent } from '../component/technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { BussinessnewsComponent } from '../component/bussinessnews/bussinessnews.component';
import { EntertainmentComponent } from '../component/entertainment/entertainment.component';
import { GeneralComponent } from '../component/general/general.component';
import { HealthnewsComponent } from '../component/healthnews/healthnews.component';
import { SciencenewsComponent } from '../component/sciencenews/sciencenews.component';
import { SportsnewsComponent } from '../component/sportsnews/sportsnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    PagenotfoundComponent,
    BussinessnewsComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthnewsComponent,
    SciencenewsComponent,
    SportsnewsComponent
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
