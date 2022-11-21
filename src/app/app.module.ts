import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrersDatesListComponent } from './carrers-dates-list/carrers-dates-list.component';
import { FormsModule } from '@angular/forms';
import { RunnersAboutComponent } from './runners-about/runners-about.component';
import { CartComponent } from './cart/cart.component';
import { RunnersShopComponent } from './runners-shop/runners-shop.component';
import { InputNumberComponent } from './input-number/input-number.component';
import{HttpClientModule} from'@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CarrersDatesListComponent,
    RunnersAboutComponent,
    CartComponent,
    RunnersShopComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
