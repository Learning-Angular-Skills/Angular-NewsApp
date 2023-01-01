import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from '../component/technews/technews.component';
import { TopheadingComponent } from '../component/topheading/topheading.component';

const routes: Routes =
  [
    {
      path: "",
      component: TopheadingComponent
    },
    {
      path: "tech",
      component: TechnewsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
