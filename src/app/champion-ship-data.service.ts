import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { runners } from './carrers-dates-list/runners';

const URL='https://62bda336c5ad14c110c37ee2.mockapi.io/api/ChampionShip';

@Injectable({
  providedIn: 'root'
})
export class ChampionShipDataService {

  constructor(private http: HttpClient ) { }
  
  public getAll():Observable<runners[]> {
   //fech
    return  this.http.get<runners[]>(URL)
        .pipe(
          tap(  ( runners:runners[] )=>runners.forEach(runners  =>  runners.cantidad= 0 ))
         );
  }
}
