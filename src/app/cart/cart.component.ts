import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { runners } from '../carrers-dates-list/runners';
import { RunnerShopService } from '../runner-shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  ShopList$: Observable<runners[]>;
  
  constructor(private shop: RunnerShopService){
    this.ShopList$ = shop.ShopList.asObservable();
   }
   
}
