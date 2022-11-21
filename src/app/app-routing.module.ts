import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrersDatesListComponent } from './carrers-dates-list/carrers-dates-list.component';
import { RunnersAboutComponent } from './runners-about/runners-about.component';
import { RunnersShopComponent } from './runners-shop/runners-shop.component';

const routes: Routes = [
  {
    path:'',
    component: CarrersDatesListComponent,
    pathMatch:'full'
  },
  {
    path:'runners',
    component: RunnersShopComponent
  },
  {
    path:'about',
    component: RunnersAboutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
