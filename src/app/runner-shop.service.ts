import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { runners } from './carrers-dates-list/runners';

@Injectable({
  providedIn: 'root'
})


export class RunnerShopService {
  
  private _ShopList:runners[]= [];

  ShopList: BehaviorSubject<runners[]>= new BehaviorSubject(this._ShopList);

  constructor(){}
  addToCart(runner:runners) {

   let item= this._ShopList.find((v1) =>v1.Localidad == runner.Localidad);

  if(!item){
    this._ShopList.push({  ... runner});
  }else{
      item.cantidad+=runner.cantidad;
  }
  console.log(this._ShopList);
  this.ShopList.next(this._ShopList);
}
  

}
