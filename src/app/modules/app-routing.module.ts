import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessnewsComponent } from '../component/bussinessnews/bussinessnews.component';
import { EntertainmentComponent } from '../component/entertainment/entertainment.component';
import { GeneralComponent } from '../component/general/general.component';
import { HealthnewsComponent } from '../component/healthnews/healthnews.component';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { SciencenewsComponent } from '../component/sciencenews/sciencenews.component';
import { SportsnewsComponent } from '../component/sportsnews/sportsnews.component';
import { TechnewsComponent } from '../component/technews/technews.component';
import { TopheadingComponent } from '../component/topheading/topheading.component';

const routes: Routes =
  [
    {
      path: "home",
      component: TopheadingComponent
    },
    {
      path: "bussiness",
      component: BussinessnewsComponent
    },
    {
      path: "entertainment",
      component: EntertainmentComponent
    },
    {
      path: "general",
      component: GeneralComponent
    },
    {
      path: "health",
      component: HealthnewsComponent
    },
    {
      path: "science",
      component: SciencenewsComponent
    },
    {
      path: "sports",
      component: SportsnewsComponent
    },
    {
      path: "technology",
      component: TechnewsComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: "**",
      component: PagenotfoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
