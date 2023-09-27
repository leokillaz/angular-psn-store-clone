import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardsComponent } from './home-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCardsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCardsRoutingModule { }
