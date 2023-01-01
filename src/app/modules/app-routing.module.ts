import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { TechnewsComponent } from '../component/technews/technews.component';
import { TopheadingComponent } from '../component/topheading/topheading.component';

const routes: Routes =
  [
    {
      path: "home",
      component: TopheadingComponent
    },
    {
      path: "tech",
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
