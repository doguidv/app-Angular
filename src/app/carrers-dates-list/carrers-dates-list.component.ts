import { Component } from '@angular/core';
import { ChampionShipDataService } from '../champion-ship-data.service';
import { RunnerShopService } from '../runner-shop.service';
import { runners } from "./runners";
@Component({
  selector: 'app-carrers-dates-list',
  templateUrl: './carrers-dates-list.component.html',
  styleUrls: ['./carrers-dates-list.component.scss']
})
export class CarrersDatesListComponent {

  runners: runners []=[];
 
 constructor(
  private shop: RunnerShopService,
  private ChampionShipData: ChampionShipDataService ){
  
 }

  ngOnInit():void{
    this.ChampionShipData.getAll()
      .subscribe(runners => this.runners=runners);
  }
  addToCart(runners:runners){
    runners.cantidad  = 1;
    this.shop.addToCart(runners);
    runners.Cupo-=runners.cantidad;
   
  }
 maxReached( m:string ){
  alert(m);
 }
}
