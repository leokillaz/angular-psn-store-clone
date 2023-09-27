import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/card/card-pricing/card-pricing.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomeCardsRoutingModule } from './home-cards-routing.module';
import { HomeCardsComponent } from './home-cards.component';
// import { LoginComponent } from 'src/app/pages/home/login/login.component';

@NgModule({
  declarations: [
    HomeCardsComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
  ],
  imports: [
    CommonModule,
    HomeCardsRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeCardsComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,]
})
export class HomeCardsModule { }
